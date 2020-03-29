# WeatherApp
[![GitHub version](https://badge.fury.io/gh/https%3A%2F%2Fgithub.com%2FGuzmanPablo%2Fweatherapp.svg)](https://badge.fury.io/gh/https%3A%2F%2Fgithub.com%2FGuzmanPablo%2Fweatherapp)

* [PRODUCCIÓN](https://weatherapp-flow-test.now.sh)
* [QA](https://weatherapp.guzmanpablo87.now.sh)

## Consigna
Aplicación de consulta del clima. Desde la misma se puede visualizar el pronóstico actual, los próximos 5 días para la ciudad actual y de otras 5 ciudades seleccionables.

## Concepto
Se buscó realizar una app, escalable y adaptable a futuras necesidades. Por tal motivos se utilizó, MaterialUI como framework para disponer de una amplia gama de customizaciones. Además, se configuró un theme propio para la app el cual puede ser cambiado a futuro.

En cuanto a performance se separaron los bundles entre módulos y app para una mejor carga. Se utilizaron loaders en los casos donde hay que esperar datos del servidor. Por último se separó la petición del clima actual, del de los próximos días para evitar un error general por falla de alguna de estas llamadas.

## Dependencias
* [React](https://es.reactjs.org/)
* [Styled-components](https://www.styled-components.com/)
* [Material-UI](https://material-ui.com/)
* [Momentjs](https://momentjs.com/)

## Recursos
* [Open Weather Map](https://openweathermap.org/api)
* [Animated weather icons](https://gist.github.com/CodeMyUI/a04c89b5edeec62ff7c178332e1f5f5c)

## Scripts
### Desarrollo
**Nota:** para poder correr localmente el proyecto se debera crear un usuario en [Open Weather Map](https://openweathermap.org/api) a fin de obtener una key para poder utilizar la API. Una vez obtenida se deberan configurar crear y configurar el archivo `.env` en base al ejemplo proporcionado `.env.example`.

```bash
npm run watch
```