import { IUser } from "@/types/user";
import { format } from "date-fns";
import { Building2, ExternalLink, Link, MapPin, Twitter } from "lucide-react";
import Image from "next/image";
import { NotAvailableSocialMedia } from "./NotAvailableSocialMedia";

export type ProfileProps = {
  data: IUser;
};

export function Profile({ data }: ProfileProps) {
  const {
    avatar_url,
    bio,
    company,
    blog,
    followers,
    following,
    name,
    login,
    twitter_username,
    location,
    created_at,
    html_url,
    public_repos,
  } = data;

  function covertDate(date: Date): string {
    if (date) {
      return format(new Date(date), "dd MMM yyyy");
    }

    return "";
  }

  return (
    <div className="my-6 flex flex-col items-start gap-3 rounded-2xl p-6 shadow-lg shadow-blue-300/50 dark:bg-[#1F2A48] dark:shadow-none md:flex-row md:gap-6">
      <Image
        src={avatar_url}
        width={100}
        height={100}
        alt=""
        className="h-20 w-20 rounded-full md:h-36 md:w-36"
      />
      <div className="flex w-full flex-col items-start justify-center gap-2 md:gap-6">
        {/* Profile Infos */}
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
          <div>
            <h1 className="text-xl md:text-3xl">{name}</h1>
            <div className="flex items-center">
              <a
                href={html_url}
                target="_blank"
                className="text-[#0087FF] transition-all hover:underline"
              >
                @{login}
              </a>
              <ExternalLink className="ml-3 h-4 w-4 text-[#0087FF]" />
            </div>
          </div>
          <p className="mt-2 text-sm">Cadastrado {covertDate(created_at)}</p>
        </div>

        {/* Bio */}
        <span className="text-[#8C93A2]">{bio}</span>

        {/* Profile Status */}
        <div className="flex w-full items-center justify-center rounded-2xl bg-slate-100 p-6 dark:bg-[#141C2F] md:items-start">
          <div className="flex grow flex-col gap-1">
            <p className="text-xs text-[#8C93A2] md:text-sm">Repos</p>
            <strong className="text-sm md:text-xl">{public_repos}</strong>
          </div>

          <div className="flex grow flex-col gap-1">
            <p className="text-xs text-[#8C93A2] md:text-sm">Followers</p>
            <strong className="text-sm md:text-xl">{followers}</strong>
          </div>

          <div className="flex grow flex-col gap-1">
            <p className="text-xs text-[#8C93A2] md:text-sm">Following</p>
            <strong className="text-sm md:text-xl">{following}</strong>
          </div>
        </div>

        {/* Social media */}
        <div className="grid w-full grid-cols-1 gap-2 text-xs md:grid-cols-2">
          {/* Location */}
          <div className="flex w-full items-center gap-2 p-2">
            <MapPin strokeWidth={1} />
            {location ? <span>{location}</span> : <NotAvailableSocialMedia />}
          </div>

          {/* Blog */}
          <div className="flex w-full items-center gap-2 p-2">
            <Link strokeWidth={1} />
            {blog ? (
              <a
                href={blog}
                target="_blank"
                className="transition-all hover:underline"
              >
                {blog}
              </a>
            ) : (
              <NotAvailableSocialMedia />
            )}
          </div>

          {/* Twitter */}
          <div className="flex w-full items-center gap-2 p-2">
            <Twitter strokeWidth={1} fill="white" />
            {twitter_username ? (
              <a
                href={`https://twitter.com/${twitter_username}`}
                className="transition-all hover:underline"
              >
                {twitter_username}
              </a>
            ) : (
              <NotAvailableSocialMedia />
            )}
          </div>

          {/* Company */}
          <div className="flex w-full items-center gap-2 p-2">
            <Building2 strokeWidth={1} />
            {company ? <span>{company}</span> : <NotAvailableSocialMedia />}
          </div>
        </div>
      </div>
    </div>
  );
}
