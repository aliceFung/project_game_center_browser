var model = {

  maze: {},
  itemPosition: {},

  initialize: function(){
    this.pacman = new Monster('pacman');
    this.ghost = new Monster('ghost');
  },

  updatePacmanMove: function(newDivID){
    // this.maze[oldDivID] = this.itemPosition['pacman'];
    this.maze[newDivID] = 'pacman';
    this.itemPosition['pacman'] = newDivID;
  }

};

function Monster(name) {
  this.name = name;
  this.movementTimer = 0;
  this.currentPosition = 0;
  this.startPosition = 0;

  var setStartPosition = function(name){
    if (name === 'pacman'){
      this.startPosition = model.itemPosition['pacman'];
    } else {
      this.startPosition = model.itemPosition['ghost'];
    }
  };
  setStartPosition(name);
}