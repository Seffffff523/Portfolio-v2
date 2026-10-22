import { Box, Facebook, Github, Linkedin, Mail, Monitor, Server, View } from "lucide-react";

const icons = {
  box: Box,
  facebook: Facebook,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  monitor: Monitor,
  server: Server,
  view: View,
};

const Icon = ({ name, ...props }) => {
  const Component = icons[name] ?? Box;
  return <Component {...props} />;
};

export default Icon;
