const fetch = require('node-fetch');

const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

const fs = require('fs');

const ratioToMm = 3.779527559;
const Xstart = 20;
const Ystart = 15;
let Yoffset = 0;

const product = [
  {
    PVP: `91€`,
    PM: `61€`,
    PS: `61€`,
    name: `product 1`,
    ref: `ref 1`,
  },
  {
    PVP: `92€`,
    PM: `62€`,
    PS: `62€`,
    name: `product 2`,
    ref: `ref 2`,
  },
  {
    PVP: `93€`,
    PM: `63€`,
    PS: `63€`,
    name: `product 3`,
    ref: `ref 3`,
  },
  {
    PVP: `94€`,
    PM: `64€`,
    PS: `64€`,
    name: `product 4`,
    ref: `ref 4`,
  },
  {
    PVP: `95€`,
    PM: `65€`,
    PS: `65€`,
    name: `product 5`,
    ref: `ref 5`,
  },
  {
    PVP: `96€`,
    PM: `66€`,
    PS: `66€`,
    name: `product 6`,
    ref: `ref 6`,
  },
  {
    PVP: `97€`,
    PM: `67€`,
    PS: `67€`,
    name: `product 7`,
    ref: `ref 7`,
  },
  {
    PVP: `98€`,
    PM: `68€`,
    PS: `68€`,
    name: `product 8`,
    ref: `ref 8`,
  },
  {
    PVP: `99€`,
    PM: `69€`,
    PS: `69€`,
    name: `product 9`,
    ref: `ref 9`,
  },
  {
    PVP: `100€`,
    PM: `70€`,
    PS: `70€`,
    name: `product 10`,
    ref: `ref 10`,
  },
  {
    PVP: `101€`,
    PM: `71€`,
    PS: `71€`,
    name: `product 11`,
    ref: `ref 11`,
  },
  {
    PVP: `102€`,
    PM: `72€`,
    PS: `72€`,
    name: `product 12`,
    ref: `ref 12`,
  },
  {
    PVP: `103€`,
    PM: `73€`,
    PS: `73€`,
    name: `product 13`,
    ref: `ref 13`,
  },
  {
    PVP: `104€`,
    PM: `74€`,
    PS: `74€`,
    name: `product 14`,
    ref: `ref 14`,
  },
  {
    PVP: `105€`,
    PM: `75€`,
    PS: `75€`,
    name: `product 15`,
    ref: `ref 15`,
  },
  {
    PVP: `106€`,
    PM: `76€`,
    PS: `76€`,
    name: `product 16`,
    ref: `ref 16`,
  },
  {
    PVP: `107€`,
    PM: `77€`,
    PS: `77€`,
    name: `product 17`,
    ref: `ref 17`,
  },
];

async function label1() {
  if (fs.existsSync('test.pdf')) fs.unlinkSync('test.pdf');

  const pdfDoc = await PDFDocument.create();

  let nbPage = 0;

  for (let i = 0; i < product.length; i++) {
    if (i === 0) {
      var page0 = pdfDoc.addPage();
    }
    if (i === 6) {
      var page1 = pdfDoc.addPage();
      nbPage++;
      Yoffset = 0;
    }
    if (i === 12) {
      var page2 = pdfDoc.addPage();
      nbPage++;
      Yoffset = 0;
    }
    if (i === 18) {
      var page3 = pdfDoc.addPage();
      nbPage++;
      Yoffset = 0;
    }
    //**** STRUCTURE ETIQUETTE ****/
    //bords extérieurs
    eval('page' + nbPage).drawRectangle({
      x: Xstart * ratioToMm,
      y: Yoffset * ratioToMm + Ystart * ratioToMm,
      width: 70 * ratioToMm,
      height: 30 * ratioToMm,
      borderWidth: 1,
      borderColor: rgb(0, 0, 0),
      color: rgb(1, 1, 1),
    });
    //rectangle noir zone prix
    eval('page' + nbPage).drawRectangle({
      x: Xstart * ratioToMm,
      y: Yoffset * ratioToMm + (Ystart + 15) * ratioToMm,
      width: 70 * ratioToMm,
      height: 15 * ratioToMm,
      borderWidth: 1,
      borderColor: rgb(0, 0, 0),
      color: rgb(0, 0, 0),
    });
    //rectangle gris PVC
    eval('page' + nbPage).drawRectangle({
      x: Xstart * ratioToMm,
      y: Yoffset * ratioToMm + (Ystart + 18) * ratioToMm,
      width: (70 * ratioToMm) / 3,
      height: 7 * ratioToMm,
      borderWidth: 1,
      borderColor: rgb(0, 0, 0),
      color: rgb(0.75, 0.75, 0.75),
    });
    //rectangle rouge prix membre
    eval('page' + nbPage).drawRectangle({
      x: Xstart * ratioToMm + (70 * ratioToMm) / 3,
      y: Yoffset * ratioToMm + (Ystart + 18) * ratioToMm,
      width: (70 * ratioToMm) / 3,
      height: 7 * ratioToMm,
      borderWidth: 1,
      borderColor: rgb(0, 0, 0),
      color: rgb(1, 0, 0),
    });
    //rectangle blanc prix spécial
    eval('page' + nbPage).drawRectangle({
      x: Xstart * ratioToMm + (2 * (70 * ratioToMm)) / 3,
      y: Yoffset * ratioToMm + (Ystart + 18) * ratioToMm,
      width: (70 * ratioToMm) / 3,
      height: 7 * ratioToMm,
      borderWidth: 1,
      borderColor: rgb(0, 0, 0),
      color: rgb(1, 1, 1),
    });
    //ligne entre pvp et prix membre
    eval('page' + nbPage).drawLine({
      start: {
        x: Xstart * ratioToMm + (70 * ratioToMm) / 3,
        y: Yoffset * ratioToMm + (Ystart + 15) * ratioToMm,
      },
      end: {
        x: Xstart * ratioToMm + (70 * ratioToMm) / 3,
        y: Yoffset * ratioToMm + (Ystart + 15 + 15) * ratioToMm,
      },
      thickness: 1,
      color: rgb(1, 1, 1),
    });
    //ligne entre prix membre et prix spécial
    eval('page' + nbPage).drawLine({
      start: {
        x: Xstart * ratioToMm + (2 * (70 * ratioToMm)) / 3,
        y: Yoffset * ratioToMm + (Ystart + 15) * ratioToMm,
      },
      end: {
        x: Xstart * ratioToMm + (2 * (70 * ratioToMm)) / 3,
        y: Yoffset * ratioToMm + (Ystart + 15 + 15) * ratioToMm,
      },
      thickness: 1,
      color: rgb(1, 1, 1),
    });
    //ligne entre article et ref
    eval('page' + nbPage).drawLine({
      start: {
        x: Xstart * ratioToMm,
        y: Yoffset * ratioToMm + (Ystart + 7) * ratioToMm,
      },
      end: {
        x: Xstart * ratioToMm + (70 * ratioToMm * 60) / 100,
        y: Yoffset * ratioToMm + (Ystart + 7) * ratioToMm,
      },
      thickness: 1,
      color: rgb(0, 0, 0),
    });
    //ligne à gauche du logo
    eval('page' + nbPage).drawLine({
      start: {
        x: Xstart * ratioToMm + (70 * ratioToMm * 60) / 100,
        y: Yoffset * ratioToMm + Ystart * ratioToMm,
      },
      end: {
        x: Xstart * ratioToMm + (70 * ratioToMm * 60) / 100,
        y: Yoffset * ratioToMm + (Ystart + 15) * ratioToMm,
      },
      thickness: 1,
      color: rgb(0, 0, 0),
    });

    //**** TEXTE ETIQUETTE ****/
    //en-têtes prix
    eval('page' + nbPage).drawText('PRIX PUBLIC PVC', {
      x: (Xstart + 2.5) * ratioToMm,
      y: Yoffset * ratioToMm + (Ystart + 27) * ratioToMm,
      size: 8,
      color: rgb(1, 1, 1),
    });
    eval('page' + nbPage).drawText('PRIX MEMBRE', {
      x: (Xstart + 2.5 + 70 / 3 + 2) * ratioToMm,
      y: Yoffset * ratioToMm + (Ystart + 27) * ratioToMm,
      size: 8,
      color: rgb(1, 1, 1),
    });
    eval('page' + nbPage).drawText('PRIX SPECIAL', {
      x: (Xstart + 2.5 + (2 * 70) / 3 + 2) * ratioToMm,
      y: Yoffset * ratioToMm + (Ystart + 27) * ratioToMm,
      size: 8,
      color: rgb(1, 1, 1),
    });
    //prix
    eval('page' + nbPage).drawText(product[i].PVP, {
      x: (Xstart + 7) * ratioToMm,
      y: Yoffset * ratioToMm + (Ystart + 20) * ratioToMm,
      size: 15,
      color: rgb(1, 1, 1),
    });
    eval('page' + nbPage).drawText(product[i].PM, {
      x: (Xstart + 7 + 70 / 3) * ratioToMm,
      y: Yoffset * ratioToMm + (Ystart + 20) * ratioToMm,
      size: 15,
      color: rgb(1, 1, 1),
    });
    eval('page' + nbPage).drawText(product[i].PS, {
      x: (Xstart + 7 + (2 * 70) / 3) * ratioToMm,
      y: Yoffset * ratioToMm + (Ystart + 20) * ratioToMm,
      size: 15,
      color: rgb(0, 0.8, 0),
    });
    //nom article
    eval('page' + nbPage).drawText(product[i].name, {
      x: (Xstart + 2) * ratioToMm,
      y: Yoffset * ratioToMm + (Ystart + 10) * ratioToMm,
      size: 10,
      color: rgb(0, 0, 0),
    });
    //ref
    eval('page' + nbPage).drawText(product[i].ref, {
      x: (Xstart + 2) * ratioToMm,
      y: Yoffset * ratioToMm + (Ystart + 2.5) * ratioToMm,
      size: 9,
      color: rgb(0, 0, 0),
    });
    Yoffset += 33;
  }

  const pdfBytes = await pdfDoc.save();

  fs.appendFileSync('test.pdf', Buffer.from(pdfBytes));
}

label1();
