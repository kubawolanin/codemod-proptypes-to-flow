/**
 * Annotates ES2015 Class constructor and Class `props` member
 *
 * @param {jscodeshiftApi} j jscodeshift API
 * @param {Array} body Array of `Node`
 */
export default function annotateConstructor(j, body, name = 'Props') {
  let constructorIndex;
  const typeAnnotation = j.typeAnnotation(
    j.genericTypeAnnotation(j.identifier(name), null)
  );

  body.some((b, i) => {
    if (b.kind === 'constructor') {
      constructorIndex = i + 1;

      return true;
    }
  });

  body.splice(constructorIndex, 0);
}
