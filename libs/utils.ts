export function stiringifyJson(obj: any) {
  let result = null;
  try {
    result = JSON.stringify(obj);
  } catch(e) {
    console.error(e, obj)
  } finally {
    return result;
  }
}

export const printLine = () => {
  console.log('========================');
}