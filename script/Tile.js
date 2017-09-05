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

  this.updateTileType(type);
}

/**
 * Renders the tile
 * @param {CanvasRenderingContext2D} context - 2D rendering context to use when rendering the tile
 */
Tile.prototype.draw = function(context)
{
  context.fillStyle = this.color;
  context.fillRect(
    this.x,
    this.y,
    this.width,
    this.height);
};

Tile.prototype.intersects = function(boundingRect)
{
  return Utility.intersects(this.getBoundingRectangle(), boundingRect);
}

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
      this.color = 'rgb(0, 255, 255)';
      break;

    case TileType.Coast:
      this.color = 'rgb(0, 255, 255)';
      break;

    case TileType.Water:
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
      this.color = 'rgb(0, 0, 0)';
      break;
  }
}