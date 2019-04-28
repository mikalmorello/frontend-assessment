
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
    navLinkClick(categoryNested);
  }

  // Create a Submenu for General Category Items
  function buildFlatNav(categoryFlat){
    // Loop through category items
    for(let i = 0; i < categoryFlat.length; i++) {
      let profileField = categoryFlat[i];
      flatNav += `
        <li class="nav__link-section-item">
          <a href="#${profileField.id}" class="nav__link-section" >${profileField.name}</a>
        </li>`;
    }
    return flatNav;
  }

  // Create a Menu for Categories
  function buildNestedNav(categoryNested){
    // Loop through category items
    for(let i = 0; i < categoryNested.length; i++) {
      let profileField = categoryNested[i],
          profileSubFields = [],
          nestedSubNav = '';
      
      // Determine if properties are stored in containing object or not
      if(profileField.containing_object){
        profileSubFields = profileField.containing_object.properties;
      } else if (profileField.properties){
        profileSubFields = profileField.properties;
      }
      
      // loop through category subitems
      for(let i = 0; i < profileSubFields.length; i++) {
        let profileSubField = profileSubFields[i];
        //console.log(profileSubField);
        nestedSubNav += `
          <li class="nav__link-section-item">
            <a href="#${profileSubField.id}" class="nav__link-section">${profileSubField.name}</a>
          </li>
        `
      }
      nestedNav += `
        <li class="nav__link-item">
          <a id="${profileField.id}" class="nav__link">${profileField.name}</a>
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
  function buildMainContentSection(fieldTitle, fieldDescription) {
    let mainContentSection = '';
    mainContentSection = `
      <li class="section__data-item">
        <div class="section__data">
          <h4 class="section__data-title">${fieldTitle}</h4>
        </div>
        <div class="section__data-description">
          ${fieldDescription}
        </div>
      </li>`;
  }

  // Build Main Content

  function buildMainContent(categoryNested, link) {
    console.log(link.id);
    console.log('content built');
    // If category nested
    for(let i = 0; i < categoryNested.length; i++) {
      let profileField = categoryNested[i],
          mainContentSections = '';
      
      if(profileField.id == link.id){
        console.log(profileField.name);
        // set main title
        mainTitle.innerHTML = `${profileField.name}`;
        
        // Determine if properties are stored in containing object or not
        if(profileField.containing_object){
          profileSubFields = profileField.containing_object.properties;
        } else if (profileField.properties){
          profileSubFields = profileField.properties;
        }
        
        // set content
        for(let i = 0; i < profileSubFields.length; i++) {
          let profileSubField = profileSubFields[i];
          //console.log(profileSubField);
          mainContentSections += `
          <section class="section section--main">
            <div class="section__header">
              <h3 class="section__title">${profileSubField.name}</h3>
              <div class="section__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at bibendum diam. Vivamus dignissim, ligula ac eleifend sodales.
              </div>
            </div>
            <ul class="section__data-list">
              <li class="section__data-item">
                <div class="section__data">
                  <h4 class="section__data-title">Type</h4>
                </div>
                <div class="section__data-description">
                  ${profileSubField.data_type}
                </div>
              </li>
              <li class="section__data-item">
                <div class="section__data">
                  <h4 class="section__data-title">Usage</h4>
                </div>
                <div class="section__data-description">
                  ${profileSubField.app_keys}
                </div>
              </li>
              <li class="section__data-item">
                <div class="section__data">
                  <h4 class="section__data-title">Evertrue Field Name</h4>
                </div>
                <div class="section__data-description">
                  ${profileSubField.name}
                </div>
              </li>
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


    
// EVENT

  // Sidebar Navigation Click
  function navLinkClick(categoryNested) {
    let sidebarNavLinks = document.getElementsByClassName('nav__link')
    Array.prototype.forEach.call(sidebarNavLinks, function(link) {
      link.addEventListener('click', function() {
        console.log('link clicked');
        buildMainContent(categoryNested, link);
      });
    });
  }

  // Default calls
  callThatAPI();


