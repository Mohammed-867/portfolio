import Image from 'next/image';

const LOGOS = [
  '/image/stack/aws-logo.png','/image/stack/ansible-logo.png',
  // '/image/stack/Git-logo.webp',
  // '/image/stack/JavaScript-logo.webp',
  '/image/stack/docker.png','/image/stack/Github.webp','/image/stack/grafana_logo.png','/image/stack/kubernetes-logo.png',
  '/image/stack/Prometheus-logo.webp','/image/stack/Slack-logo.webp', '/image/stack/Terraform-logo.png',
  '/image/stack/linux-logo.png','/image/stack/jenkins.png','/image/stack/vscode-logo.webp'
];

const Slider = () => {
  return (
    <div className="relative m-auto container overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex gap-10 w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex gap-5 items-center justify-center flex-shrink-0"
            key={index}
          >
            <Image className="w-[120px] h-[120px] object-contain" src={logo} alt="logo" width={100} height={100} />
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex items-center justify-center flex-shrink-0"
            key={index}
          >
            <Image className="w-[120px] h-[120px] object-contain" src={logo} alt="logo" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
