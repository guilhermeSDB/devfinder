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
    <div className="my-6 flex flex-col items-start gap-4 rounded-2xl bg-[#1F2A48] p-10 md:flex-row">
      <Image
        src={avatar_url}
        width={150}
        height={150}
        alt=""
        className="h-20 w-20 rounded-full md:h-40 md:w-40"
      />
      <div className="flex w-full flex-col items-start justify-center gap-6">
        {/* Profile Infos */}
        <div className="flex w-full flex-wrap items-start justify-between gap-2">
          <div>
            <h1 className="text-3xl">{name}</h1>
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
        <div className="flex w-full items-start justify-center rounded-2xl bg-[#141C2F] p-6">
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
        <div className="flex w-full flex-wrap gap-2">
          {/* Location */}
          <div className="flex w-1/2 shrink-0 grow items-center gap-4 p-2">
            <MapPin />
            {location ? <span>{location}</span> : <NotAvailableSocialMedia />}
          </div>

          {/* Blog */}
          <div className="flex w-1/2 shrink-0 grow items-center gap-4 p-2">
            <Link />
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
          <div className="flex w-1/2 shrink-0 grow items-center gap-4 p-2">
            <Twitter fill="white" />
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
          <div className="flex w-1/2 shrink-0 grow items-center gap-4 p-2">
            <Building2 />
            {company ? <span>{company}</span> : <NotAvailableSocialMedia />}
          </div>
        </div>
      </div>
    </div>
  );
}
