## About the App
The app aims to provide dynamic visualization of surface water extent in Cambodia from 2000 to 2021. Additionally, it offers annual surface water areas calculated at both national and provincial levels.
<br/><br/>
![highlight_app](highlight_app.gif)
## About the Data
The surface water extents have been extracted from the Joint Research Centre (JRC) yearly water classification history dataset [(Pekel et al., 2016)](https://doi.org/10.1038/nature20584), using the Google Earth Engine Python API. This dataset is available at a 30-m spatial resolution from 1984 to 2021. However, due to limited coverage and some gaps in the early history of the Landsat archive prior to 2000, which could compromise consistent assessment of surface water dynamics, only data from 2000 to 2021 is presented here. More details about the dataset and its limitations can be found in the paper by [Pekel et al., 2016](https://doi.org/10.1038/nature20584).
### Associated paper
Pekel, JF., Cottam, A., Gorelick, N. et al. High-resolution mapping of global surface water and its long-term changes. Nature 540, 418–422 (2016). https://doi.org/10.1038/nature20584

## Development Environment
<img src="./data/img/Vitejs-logo.svg" alt="Vite Logo" width="20"/> Vite + <img src="./data/img/React-logo.svg" alt="React Logo" width="20"/> React : for frontend development

<img src="./data/img/google-earth-engine_logo.svg" alt="Google Earth Engine Logo" width="20"/> Google Earth Engine Python API : for retrieving surface water extent dataset and performing calculations

## Disclaimer
✅ This app is provided for informational purposes. The accuracy of the information provided is subject to the accuracy of the source data.<br/>
✅ The boundaries for both the country and provinces used here do not imply official endorsement or acceptance by the United Nations. They were obtained from Humaniarian Data Exchange [(HDX)](https://data.humdata.org/dataset/cod-ab-khm) as Shapefile.<br/>
✅ By accessing this website, users agree to take full responsibility for reliance on any site information provided and to hold harmless and waive any and all liability against individuals or entities associated with its development, form and content for any loss, harm or damage suffered as a result of its use.