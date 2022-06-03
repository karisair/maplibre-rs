initSidebarItems({"constant":[["EXTENT",""],["EXTENT_SINT",""],["EXTENT_UINT",""],["MAX_ZOOM",""],["TILE_SIZE",""],["ZOOM_BOUNDS",""]],"fn":[["create_zoom_bounds",""],["tiles_with_z",""]],"struct":[["AlignedWorldTileCoords","An aligned world tile coordinate aligns a world coordinate at a 4x4 tile raster within the world. The aligned coordinates is defined by the coordinates of the upper left tile in the 4x4 tile raster divided by 2 and rounding to the ceiling."],["InnerCoords","Within each tile there is a separate coordinate system. Usually this coordinate system is within [`crate::coords::EXTENT`]. Therefore, `x` and `y` must be within the bounds of [`crate::coords::EXTENT`]."],["Quadkey","Represents the position of a node within a quad tree. The first u8 defines the `ZoomLevel` of the node. The remaining bytes define which part (north west, south west, south east, north east) of each subdivision of the quadtree is concerned."],["TileCoords","Every tile has tile coordinates. These tile coordinates are also called Slippy map tilenames."],["ViewRegion","Defines a bounding box on a tiled map with a [`ZoomLevel`] and a padding."],["WorldCoords","Actual coordinates within the 3D world. The `z` value of the [`WorldCoors`] is not related to the `z` value of the [`WorldTileCoors`]. In the 3D world all tiles are rendered at `z` values which are determined only by the render engine and not by the zoom level."],["WorldTileCoords","Every tile has tile coordinates. Every tile coordinate can be mapped to a coordinate within the world. This provides the freedom to map from TMS to Slippy_map_tilenames."],["Zoom","`Zoom` is an exponential scale that defines the zoom of the camera on the map. We can derive the `ZoomLevel` from `Zoom` by using the `[crate::coords::ZOOM_BOUNDS]`."],["ZoomLevel",""]]});