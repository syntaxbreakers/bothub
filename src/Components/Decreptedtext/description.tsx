import DecryptedText from './decreptedtext';

function Description() {
  return (
    <>
      <div>
        <DecryptedText
          text="This text animates when in view"
          animateOn="view"
          revealDirection="start"
          speed={60}
          sequential={true}
          useOriginalCharsOnly={true}
        />
      </div>
    </>
  );
}

export default Description