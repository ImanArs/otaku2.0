"use client";
import React, { useEffect } from "react";
import cls from "./styles.module.scss";
import { Button } from "@/shared/ui/Button";
import { FavoritesWrapper } from "./components/favoritesWrapper";
import { useProfile } from "@/hook/useProfile";
import { Loading } from "@/shared/ui/loading";
import Link from "next/link";

const image_placeholder = 'https://cdn.vectorstock.com/i/500p/46/73/person-gray-photo-placeholder-man-material-design-vector-23804673.jpg'

export const ProfileComponent = () => {
  const { getProfile, profile, isLoading, patchProfile } = useProfile();
  const [user, setUser] = React.useState({
    avatar: '',
    firstName: '',
    lastName: '',
    city: '',
    phone: '',
  });

  useEffect(() => {
    if (profile) {
      setUser({
        ...user,
        avatar: profile.avatar ?? '',
        firstName: profile.first_name ?? '',
        lastName: profile.last_name ?? '',
        city: profile.city ?? '',
        phone: profile.phone_number ?? '',
      });
    }
  }, [profile]);

  useEffect(() => {
    getProfile();
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser({
          ...user,
          avatar: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
    console.log(file);
    setUser({
      ...user,
      avatar: file?.name as string,
    });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  const handleSubmitData = () => {
    patchProfile(user);
  }
  

  console.log(profile?.phone_number);

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={cls.root}>
      <div className={cls.left}>
        <div className={cls.profile_pic}>
          <img
            src={user.avatar ? user.avatar : image_placeholder}
            alt="user photo"
          />
          <div className={cls.user_info}>
            <div>
              <h3>{user.firstName} {user.lastName}</h3>
            </div>
            <div className={cls.actions}>
              <button>Изменить ФИО</button>
              <label>
                Изменить ФОТО
                <input type='file' name="" id="" onChange={(e) => handleAvatarChange(e)} />
              </label>
            </div>
          </div>
        </div>

        <div className={cls.data_input}>
          <div className={cls.input}>
            <input
              type="text"
              name="city"
              placeholder="Введите ваш город"
              id=""
              value={user?.city}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className={cls.input}>
            <input
              type="text"
              name="phone"
              placeholder="Введите ваш город"
              id=""
              value={user?.phone}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <Button onClick={handleSubmitData} type="red" className={cls.save_btn}>
            Сохранить
          </Button>
        </div>
      </div>

      <div className={cls.right}>
        <FavoritesWrapper />
        <Button type="red" className={cls.fav_btn}>
          <Link href="/favorites">перейти</Link>
        </Button>
      </div>
    </div>
  );
};
