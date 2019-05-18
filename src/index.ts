import * as fs from "fs";
import path from "path";
import { PDFManager } from "./PDFManager";

const manager = new PDFManager();

const PDFFiles = fs.readdirSync(path.join(__dirname, "../pdf"));
PDFFiles.filter((pdfFile) => /\.pdf$/.test(pdfFile)).forEach((pdfFile: string) => {
  manager.save(
    path.join(__dirname, "../pdf", pdfFile),
    path.join(__dirname, "../text", pdfFile.replace(".pdf", ".txt")),
  );
});
