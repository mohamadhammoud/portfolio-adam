import React from 'react';

function CallToAction() {
  return (
    <section className="py-20">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-5 xl:gap-10 lg:flex-row justify-between">
          <div className="xl:w-6/12">
            <h2 className="text-4xl leading-normal lg:text-5xl lg:leading-snug font-bold text-white CATpara">
              Got a blockchain vision? <br />
              Let's bring it to life!👋📫
            </h2>
          </div>
          <div className="xl:w-5/12 CATpara">
            <div className="max-w-lg">
              <p className="text-2xl text-interface-300 mb-8">
                With me by your side, we'll transform your unique ideas into
                reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
