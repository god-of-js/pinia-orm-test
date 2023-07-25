import { Model } from 'pinia-orm';

export default class Selection extends Model {
  static entity = 'selection';

  static fields() {
    return {
      id: this.uid(),
      selected: this.string('')
    };
  }
}
