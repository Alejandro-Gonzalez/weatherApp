# WeatherApp
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](/)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](/CHANGELOG.md)

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
* [Now](https://zeit.co)

## Recursos
* [Open Weather Map](https://openweathermap.org/api)
* [Animated weather icons](https://gist.github.com/CodeMyUI/a04c89b5edeec62ff7c178332e1f5f5c)

---
## Ambientes
* [PRODUCCIÓN,](https://weatherapp-flow.now.sh) [master](https://github.com/GuzmanPablo/weatherApp)
* [QA,](https://weatherapp-flow-qa.now.sh) [develop](https://github.com/GuzmanPablo/weatherApp/tree/develop)


## Workflow
* [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)
* [Generate Changelog](https://www.npmjs.com/package/generate-changelog)
* [Commits](https://www.npmjs.com/package/generate-changelog#usage)

```bash
apt-get install git-flow
git flow init -d
```

## Desarrollo
**Nota:** para poder correr localmente el proyecto se debera crear un usuario en [Open Weather Map](https://openweathermap.org/api) a fin de obtener una key para poder utilizar la API. Una vez obtenida se deberan configurar crear y configurar el archivo `.env` en base al ejemplo proporcionado `.env.example`.

```bash
npm run watch
```