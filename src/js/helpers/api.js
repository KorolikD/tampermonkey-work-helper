export const gpuDB = async params => {
  const baseUrl = 'https://6667a0bef53957909ff4c790.mockapi.io/api/v1/gpu';

  const response = await fetch(baseUrl)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    });
};

export const cpuDB = async params => {
  const baseUrl = 'https://6667a0bef53957909ff4c790.mockapi.io/api/v1/cpu';

  const response = await fetch(baseUrl)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    });
};
