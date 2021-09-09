/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFAQ = /* GraphQL */ `
  mutation CreateFAQ(
    $input: CreateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    createFAQ(input: $input, condition: $condition) {
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
export const updateFAQ = /* GraphQL */ `
  mutation UpdateFAQ(
    $input: UpdateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    updateFAQ(input: $input, condition: $condition) {
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
export const deleteFAQ = /* GraphQL */ `
  mutation DeleteFAQ(
    $input: DeleteFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    deleteFAQ(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
