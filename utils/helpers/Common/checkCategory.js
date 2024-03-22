export default function checkCategoryMatch(slug_id) {
const exeptions = ["changelog", "roadmap", "troubleshooting"];
  return exeptions.some(exeption => exeption.toLowerCase() === slug_id?.toLowerCase());
};