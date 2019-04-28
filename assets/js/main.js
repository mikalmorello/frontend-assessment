
// VARIABLES

  const xhr = new XMLHttpRequest(),
  baseUrl = '../../schema.json',
  sidebarNavLinks = document.getElementById('sidebarNavLinks');

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
    var profile = response;
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
  }

  // Create a Submenu for General Category Items
  function buildFlatNav(categoryFlat){
    // Loop through category items
    for(let i = 0; i < categoryFlat.length; i++) {
      let profileField = categoryFlat[i];
      flatNav += `
        <li class="nav__link-section-item">
          <a id="${profileField.id}" class="nav__link-section" >${profileField.name}</a>
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
            <a id="${profileSubField.id}" class="nav__link-section">${profileSubField.name}</a>
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
        <a class="nav__link">general Info</a>
        <ul class="nav__link-sections">
          ${flatNav}
        </ul>
      </li>
      ${nestedNav}
      `
  }


    
// EVENTS
  callThatAPI();


