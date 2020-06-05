import Component from 'vue-class-component';
import Vue from 'vue';

const map: {[key: string]: string} = {
  'tag name duplicated': '标签名重复'
};

@Component
export class TagHelper extends Vue {
  get tagList(){
    return this.$store.state.tagList;
  }

  createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) {return window.prompt('标签名不能为空');}
    this.$store.commit('createTag', name);
    if (this.$store.state.createTagError) {
      window.alert(map[this.$store.state.createTagError.message]);
    }
  }
}

export default TagHelper;