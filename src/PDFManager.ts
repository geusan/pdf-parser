import * as fs from "fs";
import PDF from "pdf-parse";

export class PDFManager {

  public async read(filePath: string) {
    const file = fs.readFileSync(filePath);
    const data = await PDF(file);
    return data.text
      // !!만 있는거 제거
      .replace(/\!\!+/g, " ")
      // !로 시작할때 ! 제거
      .replace(/$\!/g, "")
      // 글자 뒤에 느낌표 제거
      .replace(/[\.\,\s\:\)\w]\!/g, (match: string) => `${match.slice(0, -1)} `)
      // %와 #은 공백으로 변경
      .replace(/(\%|\#)/g, " ")
      // 문자 사이에 6이 있으면 하이픈으로 변경(특수한 경우가 있을지는 모르겠다)
      .replace(/\w6/g, (match: string) => `${match.slice(0, -1)}-`)
      // 공백 trim
      .replace(/\s\s+/g, " ");
  }

  public async save(filePath: string, outputPath: string) {
    const text = await this.read(filePath);
    fs.writeFileSync(outputPath, text, { flag: "w+" });
  }

}
