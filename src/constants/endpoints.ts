const endpoints = {
  launch: '/launch',
};
const endpointKeys = Object.keys(endpoints).reduce<any>((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

export { endpoints, endpointKeys };
