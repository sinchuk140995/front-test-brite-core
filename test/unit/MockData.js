export default {

  ['GET *api/risk/'] (pathMatch, query, request, passThrough) {
    let body = [
      { id: 1, name: 'Risk 1', post_date: Date.now() },
      { id: 2, name: 'Risk 2', post_date: Date.now() },
    ]

    return {
      body: body,
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
    }
  },

  ['GET *api/client/risk/'] (pathMatch, query, request, passThrough) {
    let body = [
      { id: 1, name: 'Risk 1', post_date: Date.now() },
      { id: 2, name: 'Risk 2', post_date: Date.now() },
    ]

    return {
      body: body,
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
    }
  },

  ['GET *api/risk/1/'] (pathMatch, query, request, passThrough) {
    let body = {
      id: 1,
      insurance_risk: 1,
      name: "Risk",
      fields: [
        {
          id: 1,
          field: 1,
          name:  'Text field',
          field_type:  'text',
          options: [],
        },
        {
          id: 2,
          field: 2,
          name:  'Number field',
          field_type:  'number',
          options: [],
        },
        {
          id: 3,
          field: 3,
          name: 'Enum field',
          field_type: 'select',
          options: [
            { id: 1, name: 'Option 1', },
            { id: 2, name: 'Option 2', },
          ],
        },

      ],
    }

    return {
      body: body,
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
    }
  },

  ['POST */api/client/risk/create/'] () {
    return {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      },
    }
  },

  ['POST */api/risk/create/'] () {
    return {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      },
    }
  },

  ['DELETE *api/risk/1/delete/'] () {
    return {
      status: 204,
      headers: {
        'Content-Type': 'application/json'
      },
    }
  },

  ['DELETE *api/client/risk/1/delete/'] () {
    return {
      status: 204,
      headers: {
        'Content-Type': 'application/json'
      },
    }
  },
}
