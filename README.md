# Frontend Assessment
This is our Frontend Engineering candidate assessment, which is a representation of the types of challenges we deal with daily. We have created a scaffold of the project here in React since it's the framework we use, but you may use any framework that you prefer.

Please send us the project via email with any instructions for set up. Please note, we look more at code quality & data manipulation rather than design details. 

## Task
Use the file `schema.json` to create an interactive page. 
Requirements:
* Display the data from the file grouped into sections as a side navigation menu. 
* When an item in the menu is clicked, display the details of that property on the page. 
* Click on the group in the menu, expand menu, and change the main section to display all properties in that group
* Click on sub-element in the menu and navigate to the details in the main section for that property

## Tips for parsing the JSON
The schema is formatted as a list of objects, which could contain a “containing object” with a nested “properties” array or simply a property object itself.
Group all individual properties under “General Info”.
Display each of the groups in the menu, and display sub-items for each of the group's properties.
For each property display the following:

```
Type:  data_type
Usage:  app_keys
EverTrueFieldName:  name
```

As a sample of each type of object:

A group of properties:

```json
{
  "name": "addresses",
  "containing_object": {
    "properties": [
      {"name": "address_line1" ...}
    ]
  }
}
```

An individual property object:
```json
{
  "name": "name_first",
  "app_keys": [....]
}
```
## Requirements
* Node v8+

## Setup
* git clone this repository
* `npm install`
* `npm start`

## Notes
* This UI was built for a real feature at EverTrue and below is a screenshot for reference. We don't expect it to be that complete.

<img src="mock.jpg">
