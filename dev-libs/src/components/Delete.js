import React from 'react';
import axios from 'axios';

class Delete extends React.Component {
    handleRemove = game => {
      const url = ``;
  
      axios
        .delete(url)
        .then(res => {
          this.setState(previousState => {
            return {
            //   games: previousState.game.filter(e => e.id !== game.id)
            };
          });
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    
  }
  
  class List extends React.Component {
    removeGame = (e, game) => {
      e.preventDefault();
  
      if (this.props.removeClick) {
        this.props.removeClick(game);
      }
    };
  
    
  
    render() {
      return (
        <div>
          {this.state.games.map(game => (
            <ul onClick={this.editGame}>
              <li data-id={game.id}>{game.name}</li>
              <button type="submit" onClick={e => this.removeGame(e, game)}>
                Delete
              </button>
            </ul>
          ))}
        </div>
      );
    }
  }

  export default List;