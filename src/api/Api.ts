import { api } from 'src/boot/axios';

class Api {
  suggest(word: string) {
    return this.get(`/suggest/titles/?q=${word}`);
  }

  private async get(url: string) {
    return api.get(url).then(({ data }) => data);
  }
}

export default new Api();
