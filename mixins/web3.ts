export async function loadWeb3() {
  const module = await import('web3/dist/web3.min.js');

  return module.default;
}
