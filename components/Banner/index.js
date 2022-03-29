const Banner = () => {
  return (
    <>
      <div className="banner">
        <p>Video Geldi</p>
        <p>
          Artık istediğin başlığa dilediğin yorumu vidio çekerek yapabileceksin!
          Tek yapman gereken dio app’i indirmek!
        </p>
      </div>
      <style jsx>{`
          .banner {
              display:flex;
              flex-direction:column;
              flex-wrap: nowrap;
              justify-content:center;

              margin-bottom: 1rem;
              padding: 1rem;
              background-color:#16232c;

              }

              .banner p:first-child {
                  font-size:16px;
                  color:#fc3937;
              }

              .banner p:last-child {
                  max-width: 55ch;
                  color:white;
              }
          }
          `}</style>
    </>
  );
};

export default Banner;
