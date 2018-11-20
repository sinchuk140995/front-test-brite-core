export default {

  // basic mock
  ['GET */api/risk/'] (pathMatch, query, request, passThrough) {
    // before respond, you can check the path and query parameters with `pathMatch` & `query`
    // powered by 'url-pattern' & 'qs'
    // https://www.npmjs.com/package/url-pattern
    // https://www.npmjs.com/package/qs

    // to pass through this mock, call the 4th parameter as a function, the return value will be ignored
    // passThrough()

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
      // statusText: 'OK',
      // delay: 500, // millisecond
    }
  },

  ['GET */api/client/risk/'] (pathMatch, query, request, passThrough) {
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
      // statusText: 'OK',
      // delay: 500, // millisecond
    }
  },

  ['GET */api/risk/1/'] (pathMatch, query, request, passThrough) {
    // before respond, you can check the path and query parameters with `pathMatch` & `query`
    // powered by 'url-pattern' & 'qs'
    // https://www.npmjs.com/package/url-pattern
    // https://www.npmjs.com/package/qs

    // to pass through this mock, call the 4th parameter as a function, the return value will be ignored
    // passThrough()

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

  // shorthand mock
  // ['PUT */path/to/resource']: 200, // respond with only status code

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
}
