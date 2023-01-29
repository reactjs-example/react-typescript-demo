export type ProfileProps = {
  username: string;
};
export const Profile = ({ username }: ProfileProps) => {
  return <div>Welcome {username}</div>;
};
