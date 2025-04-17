
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";

export default function MilagrosLandingPage() {
  const handleOrder = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const message = `Halo, saya ingin memesan Milagros.\nNama: ${name}\nNo HP: ${phone}\nAlamat: ${address}`;
    const whatsappUrl = `https://wa.me/6285233447500?text=${encodeURIComponent(message)}`;

    const templateParams = {
      name,
      phone,
      address,
      message,
    };

    emailjs
      .send("your_service_id", "your_template_id", templateParams, "your_public_key")
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          window.open(whatsappUrl, "_blank");
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert("Gagal mengirim email konfirmasi. Silakan coba lagi.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-6">
      <header className="text-center mb-10">
        <img src="/banner_drinking.png" alt="Banner Drinking" className="w-full max-h-[300px] object-cover rounded-xl shadow-lg mb-6" />
        <h1 className="text-4xl font-bold text-purple-700">Milagros</h1>
        <p className="text-lg text-gray-600 mt-2">Air minum alkali premium untuk hidup lebih sehat dan bertenaga</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 items-center">
        <img src="/bottle2.png" alt="Milagros bottle" className="rounded-2xl shadow-xl" />
        <div>
          <h2 className="text-2xl font-semibold text-purple-800 mb-2">Kenapa Memilih Milagros?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>pH tinggi (9.8+) untuk menetralisir asam dalam tubuh</li>
            <li>Mengandung antioksidan alami untuk menangkal radikal bebas</li>
            <li>Dibuat dengan teknologi nano untuk penyerapan optimal</li>
            <li>Kemasan elegan dan praktis dibawa ke mana saja</li>
          </ul>
          <Button className="mt-4 bg-purple-700 hover:bg-purple-800" onClick={() => window.open('https://wa.me/6285233447500', '_blank')}>Order Sekarang</Button>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Testimoni Konsumen</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-white shadow-md">
            <CardContent className="p-4">
              <p className="text-gray-600 italic">"Saya merasa lebih segar dan tidak mudah lelah sejak rutin minum Milagros."</p>
              <p className="text-sm mt-2 text-right font-semibold">- Andi, Jakarta</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md">
            <CardContent className="p-4">
              <p className="text-gray-600 italic">"Cocok untuk saya yang punya masalah asam lambung. Terasa beda hasilnya!"</p>
              <p className="text-sm mt-2 text-right font-semibold">- Rina, Bandung</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md">
            <CardContent className="p-4">
              <p className="text-gray-600 italic">"Milagros selalu saya bawa ke mana pun. Wajib banget buat jaga stamina."</p>
              <p className="text-sm mt-2 text-right font-semibold">- Dedi, Surabaya</p>
            </CardContent>
          </Card>
        </div>
        <img src="/maskot.png" alt="Milagros Mascot" className="mx-auto mt-8 w-40" />
      </section>

      <section className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-purple-800 text-center mb-4">Pesan Sekarang</h2>
        <form className="bg-white p-6 rounded-2xl shadow-lg space-y-4" onSubmit={handleOrder}>
          <div>
            <Label htmlFor="name">Nama</Label>
            <Input id="name" placeholder="Nama lengkap Anda" required />
          </div>
          <div>
            <Label htmlFor="phone">Nomor HP</Label>
            <Input id="phone" placeholder="0812xxxxxxx" required />
          </div>
          <div>
            <Label htmlFor="address">Alamat Pengiriman</Label>
            <Input id="address" placeholder="Alamat lengkap" required />
          </div>
          <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800">Kirim Pesanan via WhatsApp</Button>
        </form>
      </section>

      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-purple-800 text-center mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium cursor-pointer">Apa itu Milagros?</summary>
            <p className="mt-2 text-gray-700">Milagros adalah air minum alkali dengan pH tinggi yang membantu menjaga keseimbangan tubuh dan meningkatkan kesehatan secara alami.</p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium cursor-pointer">Apakah Milagros aman dikonsumsi setiap hari?</summary>
            <p className="mt-2 text-gray-700">Ya, Milagros aman dikonsumsi setiap hari dan bahkan dianjurkan untuk diminum secara rutin.</p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium cursor-pointer">Bagaimana cara pemesanannya?</summary>
            <p className="mt-2 text-gray-700">Anda dapat mengisi formulir pemesanan di atas atau menghubungi kami langsung melalui tombol "Order Sekarang".</p>
          </details>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Milagros Indonesia. All rights reserved.
      </footer>
    </div>
  );
}
