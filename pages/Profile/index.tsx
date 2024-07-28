"use client";
import React, { useEffect } from "react";
import cls from "./styles.module.scss";
import { Button } from "@/shared/ui/Button";
import { FavoritesWrapper } from "./components/favoritesWrapper";
import { useProfile } from "@/hook/useProfile";
import { Loading } from "@/shared/ui/loading";
import Link from "next/link";
import { useCheckUserAuth } from "@/hook/useCheckUserAuth";
import { NoAccessPage } from "../noAccessPage";

const image_placeholder = 'https://cdn.vectorstock.com/i/500p/46/73/person-gray-photo-placeholder-man-material-design-vector-23804673.jpg'

interface User {
  avatar: File | null;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  phone_number: string;
  email: string;
}

export const ProfileComponent = () => {
  const { getProfile, profile, isLoading, patchProfile, getCityList, cityList } = useProfile();
  const {isAuth} = useCheckUserAuth()
  
  const [user, setUser] = React.useState<User>({
    avatar: null,
    first_name: '',
    last_name: '',
    address: '',
    city: '',
    phone_number: '',
    email: '',
  });

  useEffect(() => {
    if (profile) {
      setUser({
        ...user,
        avatar: profile.avatar ?? '',
        address: profile.address ?? '',
        first_name: profile.first_name ?? '',
        last_name: profile.last_name ?? '',
        city: profile.city ?? '',
        phone_number: profile.phone_number ?? '',
        email: profile.email ?? '',
      });
    }
  }, [profile]);

  useEffect(() => {
    if (isAuth) {
      getProfile()
      getCityList()
    }
  }, [isAuth, getProfile])

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUser({
        ...user,
        avatar: file as File,
      });
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  const handleSubmitData = () => {
    const formData = new FormData();
    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    formData.append('address', user.address);
    formData.append('city', user.city);
    formData.append('phone_number', user.phone_number);
    formData.append('email', user.email);
    if (user.avatar) {
      formData.append('avatar', user.avatar);
    }

    patchProfile(formData);
  }

  const removeUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.reload();
  }

  if (!isAuth) return <NoAccessPage noRedText={false} />

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={cls.root}>
      <div className={cls.left}>
        <div className={cls.profile_pic}>
          <img
            src={user.avatar ? URL.createObjectURL(user.avatar) : image_placeholder}
            alt="user photo"
          />
          <div className={cls.user_info}>
            <div>
              <h3>{user.first_name} {user.last_name}</h3>
            </div>
            <div className={cls.actions}>
              <button>Изменить ФИО</button>
              <label>
                Изменить ФОТО
                <input type='file' name="" id="" onChange={(e) => handleAvatarChange(e)} />
              </label>
              <button onClick={removeUser}>выйти из аккаунта</button>
            </div>
          </div>
        </div>

        <div className={cls.data_input}>
          <div className={cls.input}>

          <select
              name="city"
              value={user.city}
              onChange={(e) => handleInputChange(e)}
            >
              <option>выберите город</option>
              {(cityList?.length ?? 0) > 0 && cityList?.map((city) => (
                <option key={city.id} value={city.id}>{city.name}</option>
              ))}
            </select>
            </div>
          <div className={cls.input}>
            <input
              type="text"
              name="address"
              placeholder="Введите ваш адресс"
              id=""
              value={user?.address}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className={cls.input}>
            <input
              type="text"
              name="email"
              placeholder="Введите ваш email"
              id=""
              value={user?.email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className={cls.input}>
            <input
              type="text"
              name="phone_number"
              placeholder="Введите ваш город"
              id=""
              value={user?.phone_number}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <Button onClick={handleSubmitData} variant="red" className={cls.save_btn}>
            Сохранить
          </Button>
        </div>
      </div>

      <div className={cls.right}>
        <FavoritesWrapper />
        <Button variant="red" className={cls.fav_btn}>
          <Link href="/favorites">перейти</Link>
        </Button>
      </div>
    </div>
  );
};
