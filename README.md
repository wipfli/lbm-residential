# lbm-residential
Add a landuse=residential like layer to the swisstopo light base map

## motivation

The [swisstopo light base map](https://vectortiles.geo.admin.ch) has in my opinion a deficit at zoom levels around 13: roads of villages look a bit like skeletons. 

At zoom levels higher than 13 buildings start to appear which makes village boundaries apparent while at zoom levels lower than 13 the roads are not as dense. So there the map looks good but at zoom 13 the buildings are not there yet and it is not clear where village boundaries are.

In [openmaptiles](https://openmaptiles.org/schema/#landuse) there are polygons for landuse type residential. This map here uses landuse=residential at zoom levels higher than 12 to make villages look a bit less like skeletons.

<img src="/without.PNG" width=450>

_This is the swisstopo light base map as of style version 1.0.0. At zoom level 13 village boundaries are not visible and roads look a bit like skeletons._

<img src="/with.PNG" width=450>

_By adding a layer with landuse=residential it is now clearer where village boundaries are and the roads are less lost in the void._

## demo

https://wipfli.github.io/lbm-residential/

## install

```bash
npm install
```

## develop

```bash
npm start
```

## build and deploy to GitHub Pages

```bash
npm run build
npm install -g gh-pages
gh-pages -d build
```
