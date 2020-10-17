import Image from '../models/Image'
import envVariables from '../config/environmentVariables';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${envVariables.getUploadUrl()}${image.path}`
    };
  },
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }

}