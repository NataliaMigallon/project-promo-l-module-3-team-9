const getCard = () => {
  return fetch(`/card/:id:/`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const sendCard = (data) => {
  return fetch(`/card`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default {
  getCard: getCard,
  sendCard: sendCard,
};
