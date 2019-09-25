// import React from 'react';
// import ErrorMessage from './ErrorMessage';
// import SuccessMessage from './SuccessMessage';

// class DeleteMovieQuoteForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movieQuote: {
//         quote: "Toto, I've got a feeling we're not in Kansas anymore.",
//         movie: 'Wizard of Oz',
//         character: 'Dorothy'
//       }
//     };
//   }

//   handleChange = e => {
//     this.setState({
//       movieQuote: {
//         ...this.state.movieQuote,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   deleteMessage = e => {
//     e.preventDefault();
//     // invoke this.props.deleteMessage here once it is written and passed in
//   };

//   render() {
//     return (
//       <div className="quotes-form">
//         <h2>DELETE (delete) a quote</h2>
//         <form onSubmit={this.deleteMessage}>
          
//           <button className="quotes-btn" type="submit">
//             DELETE quote
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export default DeleteMovieQuoteForm;