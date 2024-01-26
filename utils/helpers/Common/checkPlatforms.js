export default function checkPlatformMatch(name) {
const platforms = ["linux", "windows", "docker"];
  return platforms.some(platform => platform.toLowerCase() === name?.toLowerCase());
};