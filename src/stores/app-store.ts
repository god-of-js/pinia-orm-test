import { defineStore } from 'pinia';
import { useRepo } from 'pinia-orm';
import Api from 'src/api/Api';
import Selection from 'src/models/Selection';

const selectionRepo = useRepo(Selection);

interface AppState {
  options: string[];
}
export const useAppStore = defineStore({
  id: 'search',
  state: (): AppState => ({
    options: []
  }),
  getters: {
    selections: () => {
      return selectionRepo.all();
    }
  },
  actions: {
    loadOptions(query = ''): Promise<string[]> {
      return Api.suggest(query).then((res) => {
        if (query === '') {
          this.options = res[1];
        }
        return res[1];
      });
    },
    setSelection(selected: string) {
      selectionRepo.save({ selected });
    }
  }
});
