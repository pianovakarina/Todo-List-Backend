/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFAQ = /* GraphQL */ `
  query GetFAQ($id: ID!) {
    getFAQ(id: $id) {
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
export const listFAQS = /* GraphQL */ `
  query ListFAQS(
    $filter: ModelFAQFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFAQS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        destination_id
        category_id
        product_id
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
