/**
 * A tile
 * @constructor
 * @param {integer} x - X-coordinate of the tile
 * @param {integer} y - Y-cooridnate of the tile
 */
function Tile(x, y, size, type)
{
  this.x = x;
  this.y = y;

  this.type = null;
  this.isPassable = true;

  this.height = size;
  this.width = size;

  this.halfHeight = (this.height/2);
  this.halfWidth = (this.width/2);

  this.updateTileType(type);

  this.isIntersecting = false;
}

/**
 * Renders the tile
 * @param {CanvasRenderingContext2D} context - 2D rendering context to use when rendering the tile
 * @param {integer} mapCenterX - X-coordinate of the map's center
 * @param {integer} mapCenterY - Y-coordinate of the map's center
 * @param {float} zoomPercentage - Curret zoom percentage of the map
 */
Tile.prototype.draw = function(context, mapCenterX, mapCenterY, zoomPercentage)
{
  context.fillStyle = this.color;

  var x = Math.ceil(((this.x - this.halfWidth) * zoomPercentage) + mapCenterX);
  var y = Math.ceil(((this.y - this.halfHeight) * zoomPercentage) + mapCenterY);
  var width = Math.ceil(this.width * zoomPercentage);
  var height = Math.ceil(this.height * zoomPercentage);

  context.fillRect(x, y, width, height);
};

Tile.prototype.getBoundingRectangle = function()
{
  return {
    x: this.x,
    y: this.y,
    height: this.height,
    width: this.width
  };
}

Tile.prototype.updateTileType = function(tileType)
{
  this.type = tileType;

  // Initialize properties based on tile type
  switch(this.type)
  {
    case TileType.Land:
      this.isPassable = true;
      this.color = 'rgb(0, 255, 255)';
      break;

    case TileType.Coast:
      this.isPassable = true;
      this.color = 'rgb(0, 255, 255)';
      break;

    case TileType.Water:
      this.isPassable = true;
      this.color = 'rgb(0, 0, 255)';
      break;

    case TileType.Tree:
      this.isPassable = false;
      this.color = 'rgb(0, 255, 0)';
      break;

    case TileType.TreeWithFruit:
      this.isPassable = false;
      this.color = 'rgb(255, 0, 0)';
      break;

    case TileType.Tower:
      this.isPassable = false;
      this.color = 'rgb(0, 0, 0)';
      break;
  }
}
