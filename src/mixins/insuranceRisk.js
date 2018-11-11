export default function() {
  return {
    data() {
      return {
        fields: [
          { id: 1, name: 'Field 1', value: 'Value 1', type: "text"},
          { id: 2, name: 'Field 2', value: 'Value 2', type: "number"},
          { id: 3, name: 'Field 3', value: '23', values: ['Value 3', '23'], type: "select"},
          { id: 4, name: 'Field 4', value: 'Value 4', type: "text"},
          { id: 5, name: 'Field 5', value: 'Value 5', type: "text"},
        ]
      }
    },
  }
};
