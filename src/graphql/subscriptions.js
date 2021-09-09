/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFAQ = /* GraphQL */ `
  subscription OnCreateFAQ {
    onCreateFAQ {
      id
      destination_id
      category_id
      product_id
      questions {
        items {
          id
          user
          FAQID
          question
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFAQ = /* GraphQL */ `
  subscription OnUpdateFAQ {
    onUpdateFAQ {
      id
      destination_id
      category_id
      product_id
      questions {
        items {
          id
          user
          FAQID
          question
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFAQ = /* GraphQL */ `
  subscription OnDeleteFAQ {
    onDeleteFAQ {
      id
      destination_id
      category_id
      product_id
      questions {
        items {
          id
          user
          FAQID
          question
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      user
      FAQID
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      user
      FAQID
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      user
      FAQID
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
