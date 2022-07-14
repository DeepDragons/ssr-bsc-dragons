import { loadWeb3 } from './web3';
import detectEthereumProvider from '@metamask/detect-provider';
import CrowdSaleABI from 'abi/crowd-sale.json';
import { Contracts } from '@/config/contracts';
import { $state } from '@/store/state';

export class CrowdSale {

  public async getPrice() {
    const Web3 = await loadWeb3();
    const provider: any = await detectEthereumProvider();
    const web3 = new Web3(provider);
    const crowdsale = new web3.eth.Contract(CrowdSaleABI, Contracts.Distributer);

    const price = await crowdsale.methods.dragonPrice().call();

    $state.setState({
      ...$state.state,
      price
    });
  }

  public async buy(num: number) {
    const Web3 = await loadWeb3();
    const provider: any = await detectEthereumProvider();
    const web3 = new Web3(provider);
    const crowdsale = new web3.eth.Contract(CrowdSaleABI, Contracts.Distributer);
    const { BN } = web3.utils;
    const _price = new BN($state.state.price);
    const _num = new BN(num);
    const amount = _price.mul(_num);
    const mintDragon = crowdsale.methods.mintDragon(Contracts.NIL);
    const encodedABI = mintDragon.encodeABI();
    const tx = {
      value: amount.toString('hex'),
      to: Contracts.Distributer,
      from: provider.selectedAddress,
      data: encodedABI
    };

    const txHash = await provider.request({
      method: 'eth_sendTransaction',
      params: [tx],
    });
    console.log(txHash);
  }
}
