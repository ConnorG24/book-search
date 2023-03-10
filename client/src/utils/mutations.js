import {gql} from '@apollo/client'


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
      token
      user{
        _id
        username
        email
        
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
      user{
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput!){
    savedBook(input: $input){
      _id
      username
      bookCount
      savedBooks{
        bookId 
        authors
        title
        image
        link
        description
      }
    }
  }
`;

export const REMOVE_BOOK =gql`
  mutation removeBook($bookId: String!){
    removeBook(bookId: $bookId) {
      _id
        username
        email
        bookCount
        savedBooks{
          bookId 
          authors
          title
          image
          link
          description
        }
    }
  }
`;


 