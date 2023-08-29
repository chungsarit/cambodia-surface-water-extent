## About the App
The app aims to provide dynamic visualization of surface water extent in Cambodia from 2000 to 2021. Additionally, it offers annual surface water areas calculated at both national and provincial levels.

## About the Data
The surface water extents have been extracted from the Joint Research Centre (JRC) yearly water classification history dataset (Pekel et al., 2016), using the Google Earth Engine Python API. This dataset is available at a 30-m spatial resolution from 1984 to 2021. However, due to limited coverage and some gaps in the early history of the Landsat archive prior to 2000, which could compromise consistent assessment of surface water dynamics, only data from 2000 to 2021 is presented here. More details about the dataset and its limitations can be found in this paper (Pekel et al., 2016).

## Development Environment
<img src="./data/img/Vitejs-logo.svg" alt="Vite Logo" width="20"/> Vite + <img src="./data/img/React-logo.svg" alt="React Logo" width="20"/> React : for frontend development

<img src="./data/img/google-earth-engine_logo.svg" alt="Google Earth Engine Logo" width="20"/> Google Earth Engine Python API : for retrieving surface water extent dataset and performing calculations

