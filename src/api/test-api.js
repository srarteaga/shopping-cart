export async function getProducts() {
  try {
    const dataStorage = JSON.parse(localStorage.getItem("produts"));
    if(dataStorage){
      return dataStorage;
    }
    const response = await fetch(`${process.env.REACT_APP_API}/api/product`);
    if (!response.ok) {
      return _handleError(response.status);
    }
    const data = await response.json();
    localStorage.setItem("produts", JSON.stringify(data));
    return data;
  } catch (err) {
    _throwSpecificError(err);
  }
}

export async function getProduct(id) {
  try {
    const dataStorage = JSON.parse(localStorage.getItem(id));
    if(dataStorage){
      return dataStorage;
    }
    const response = await fetch(`${process.env.REACT_APP_API}/api/product/${id}`);
    if (!response.ok) {
      return _handleError(response.status);
    }
    const data = await response.json();
    localStorage.setItem(id, JSON.stringify(data));
    return data;
  } catch (err) {
    _throwSpecificError(err);
  }
}

export async function AddToCart(cart) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/api/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    });
    if (!response.ok) {
      return _handleError(response.status);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    _throwSpecificError(err);
  }
}

function _handleError(status) {
  if (status === 404) {
    throw new NotFoundError();
  }

  if (status === 500) {
    throw new ServerError();
  }
}

function _throwSpecificError(err) {
  if (err instanceof ServerError || err instanceof NotFoundError) {
    throw err;
  }
  throw new NetworkError();
}

export class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}

export class NotFoundError extends Error {
  constructor() {
    super("The resource you requested was not found.");
  }
}

export class ServerError extends Error {
  constructor() {
    super("There was a server error.");
  }
}