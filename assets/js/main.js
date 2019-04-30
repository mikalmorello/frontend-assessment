
// VARIABLES

  const xhr = new XMLHttpRequest(),
  baseUrl = '../../schema.json',
  sidebarNavLinks = document.getElementById('sidebarNavLinks'),
  mainTitle = document.getElementById('mainTitle'),
  mainContent = document.getElementById('mainContent');

  let categoryFlat = [],
      categoryNested = [],
      categoryFlatResults = '',
      flatNav = '',
      nestedNav = '';

// FUNCTIONS

  // API Call
  function callThatAPI() {
    xhr.open('GET', `${baseUrl}`)
    xhr.send();
    xhr.onload = handleSuccess;
    xhr.onerror = handleError;
  }

  // API Success
  function handleSuccess() {
    var response = JSON.parse(xhr.responseText);
    console.log('working');
    loadProfile(response);
  }

  // API Error
  function handleError() {
    console.log('broken');
  }


  // Load Results
  function loadProfile(response){
    let profile = response;
    for(let i = 0; i < profile.length; i++) { 
      let profileField = profile[i];
      // Create array for fields that fall within the General Category
      if(profileField.containing_object || profileField.properties){
        categoryNested.push(profileField);
      } else {
        categoryFlat.push(profileField);
      }
    }
    // Build Menu Structure
    buildFlatNav(categoryFlat);
    buildNestedNav(categoryNested);
    buildSidebarNav(flatNav, nestedNav);
    navLinkClick(categoryFlat, categoryNested);
  }

  // Determine profile subfield type
  function profileSubFieldType(profileField) {
      var profileSubFields = [];
      // Determine if properties are stored in containing object or not
      if(profileField.containing_object){
        profileSubFields = profileField.containing_object.properties;
      } else if (profileField.properties){
        profileSubFields = profileField.properties;
      } 
    
    return profileSubFields;
  }

  // Create a Submenu for General Category Items
  function buildFlatNav(categoryFlat){
    // Loop through category items
    for(let i = 0; i < categoryFlat.length; i++) {
      let profileField = categoryFlat[i],
          displayName = addReadableNames(profileField.name);
      
      flatNav += `
        <li class="nav__link-section-item">
          <a href="#${profileField.id}" class="nav__link-section" >${displayName}</a>
        </li>`;
    }
    return flatNav;
  }

  // Create a Menu for Categories
  function buildNestedNav(categoryNested){
    // Loop through category items
    for(let i = 0; i < categoryNested.length; i++) {
      let profileField = categoryNested[i],
          nestedSubNav = '',
          profileSubFields = profileSubFieldType(profileField),
          parentDisplayName = addReadableNames(profileField.name);
      
      // loop through category subitems
      for(let i = 0; i < profileSubFields.length; i++) {
        let profileSubField = profileSubFields[i],
            displayName = addReadableNames(profileSubField.name);
        nestedSubNav += `
          <li class="nav__link-section-item">
            <a href="#${profileSubField.id}" class="nav__link-section">${displayName}</a>
          </li>
        `
      }
      nestedNav += `
        <li class="nav__link-item">
          <a id="${profileField.name}" class="nav__link">${parentDisplayName}</a>
          <ul class="nav__link-sections">
            ${nestedSubNav}
          </ul>
        </li>`
    }
    return nestedNav;
  }

  // Create a SidebarNav
  function buildSidebarNav(flatNav, nestedNav){
    sidebarNavLinks.innerHTML = `
      <li class="nav__link-item">
        <a id="general" class="nav__link">general Info</a>
        <ul class="nav__link-sections">
          ${flatNav}
        </ul>
      </li>
      ${nestedNav}
      `;
  }

  // Build Main Content Section
  function buildMainContentSection(fieldClass, fieldTitle, fieldDescription) {
    let mainContentSection = '',
        displayName = addReadableNames(fieldTitle);
    mainContentSection = `
      <li class="section__data-item">
        <div class="section__data">
          <h4 class="section__data-title">${displayName}</h4>
        </div>
        <div class="section__data-description section__data-description--${fieldClass}">
          ${fieldDescription}
        </div>
      </li>`;
    return mainContentSection;
  }


  // Build Main Content - Flat
  function buildMainContentFlat(category, link) {
    let mainContentSections = '';
    
    mainTitle.innerHTML = `${link.id}`;
    
    // Loop through category elements
    for(let i = 0; i < category.length; i++) {
      let profileField = category[i],
          displayName = addReadableNames(profileField.name);
      
      mainContentSections += `
      <section class="section section--main">
        <div class="section__header">
          <h3 class="section__title">${displayName}</h3>
        </div>
        <ul class="section__data-list">
          ${buildMainContentSection('data-type', 'Type', profileField.data_type)}
          ${buildMainContentSection('app-keys', 'Usage', profileField.app_keys)}
          ${buildMainContentSection('name', 'Evertrue Field Name', profileField.name)}
        </ul>
      </section>
      `;
    } 

    mainContent.innerHTML = `
      ${mainContentSections}
    `;
    
  }


  // Build Main Content - Nested
  function buildMainContent(category, link) {

    // Loop through category elements
    for(let i = 0; i < category.length; i++) {
      let profileField = category[i],
          profileSubFields = profileSubFieldType(profileField),
          mainContentSections = '';
      
      if(profileField.name == link.id){
        // set main title
        mainTitle.innerHTML = `${profileField.name}`;
        
        // set content
        for(let i = 0; i < profileSubFields.length; i++) {
          let profileSubField = profileSubFields[i],
              displayName = addReadableNames(profileSubField.name);
          
          mainContentSections += `
          <section class="section section--main">
            <div class="section__header">
              <h3 class="section__title">${displayName}</h3>
            </div>
            <ul class="section__data-list">
              ${buildMainContentSection('data-type', 'Type', profileSubField.data_type)}
              ${buildMainContentSection('app-keys', 'Usage', profileSubField.app_keys)}
              ${buildMainContentSection('name', 'Evertrue Field Name', profileSubField.name)}
            </ul>
          </section>
          `;
        } 
        
        mainContent.innerHTML = `
          ${mainContentSections}
        `;
        
      }
      
    }
  }


  // Manage link state
  function activeLink(link){
    let parent = link.parentNode,
        parentSiblings = document.getElementsByClassName('nav__link-item');
    
    // Remove active link class from siblings
    Array.prototype.forEach.call(parentSiblings, function(element) {
      element.classList.remove(`nav__link-item--active`);
    });
    
    // Add active link class
    parent.classList.add('nav__link-item--active');
  }
    
  // Add readable names to fields
  function addReadableNames(fieldName) {
    let displayName = '';
    switch(fieldName) {
      case 'name_first':
        return displayName = 'first name';
        break;
      case 'et_donor_index':
        return displayName = 'evertrue donor index';
        break;
      default:
        console.log('default case');
        return displayName = fieldName.replace(/_/g, ' ');
    }
  }
  

// EVENT

  // Sidebar Navigation Click
  function navLinkClick(categoryFlat, categoryNested) {
    let sidebarNavLinks = document.getElementsByClassName('nav__link')
    Array.prototype.forEach.call(sidebarNavLinks, function(link) {
      link.addEventListener('click', function() {
        if(link.id == 'general') {
          let category = categoryFlat;
          buildMainContentFlat(category, link);
        } else {
          let category = categoryNested;
          buildMainContent(category, link);
        }
        // Activate Link
        activeLink(link);
      });
    });
  }

  // Default calls
  callThatAPI();


