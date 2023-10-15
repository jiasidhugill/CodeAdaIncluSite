# incluSite: Code Ada

## Project Description
During COVID-19, reliance on online platforms skyrocketed. Unfortunately, many websites, including federal websites, are not accessible for those with disabilities. Websites often fail to accommodate screenreaders and other accessible methods of accessing the internet. Very few websites are free of WCAG (Web Content Accessibility Guidelines) violations. When it comes to accessing federal services, these failings are dangerous.

**Our mission** is to develop a database of federal government websites and their accessibility issues, with the purpose of identifying and recommending accessible websites to access federal services. We used the [WAVE API](https://wave.webaim.org/), [U.S. government website analytics](https://analytics.usa.gov/data/), and [MongoDB](https://www.mongodb.com/) to create and analyze our dataset.

**Our future goals** are to create a platform that can identify alternatives to an inaccessible government website; after, we hope to create an algorithm that can automate adding aria links, subtitles, and other accessibility features to a non-complying website.

## File Descriptions
`get-data.js`: Gets data from the API.

`clean-data.js`: Has functions to manage and edit the collection in MongoDB.

`use-data.js`: Has functions to analyze data directly from MongoDB.

`all-domains-30-days.json`: Downloaded as a CSV from [https://analytics.usa.gov/data/](https://analytics.usa.gov/data/), converted to JSON.

`codeAda.html`: HTML file for locally hosted website that displays MongoDB Dashboard.

`style.css`: CSS file for locally hosted website that displays MongoDB Dashboard.
