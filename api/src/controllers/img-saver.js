const Jimp = require("jimp");
const path = require("path");
const { exec } = require("child_process");

const create = async (type, template, info, data) => {
  try {
    let imagePath = path.resolve(
      `/home/xogaiht/Code/hackathon/api/resources/img/${template}`
    );
    let font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    let image = await Jimp.read(imagePath);
    let options = {
      text: data,
      maxWidth: 1500 - 400, //image width - 10px margin left - 10px margin right
      maxHeight: 200 + 20, //logo height + margin
      placementX: 200,
      placementY: 700
    };

    image.print(
      font,
      options.placementX,
      options.placementY,
      {
        text: options.text,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
      },
      options.maxWidth,
      options.maxHeight
    );

    image
      .quality(100)
      .write(
        path.resolve(
          `/home/xogaiht/Code/hackathon/api/resources/img/${type}${info}.png`
        )
      );

    exec(`mv resources/img/${type}${info}.png public/img/${type}${info}.png`);

    return `/home/xogaiht/Code/hackathon/api/public/img/${type}${info}.png`;
  } catch (error) {
    error;
  }
};

export default { create };
