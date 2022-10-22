import database from '../database';
import City from '../models/citySchema';

const cities = [
    { governorate: 1, cityNameAr: '15 مايو', cityNameEn: '15 May' },
    { governorate: 1, cityNameAr: 'الازبكية', cityNameEn: 'Al Azbakeyah' },
    { governorate: 1, cityNameAr: 'البساتين', cityNameEn: 'Al Basatin' },
    { governorate: 1, cityNameAr: 'التبين', cityNameEn: 'Tebin' },
    { governorate: 1, cityNameAr: 'الخليفة', cityNameEn: 'El-Khalifa' },
    { governorate: 1, cityNameAr: 'الدراسة', cityNameEn: 'El darrasa' },
    {
        governorate: 1,
        cityNameAr: 'الدرب الاحمر',
        cityNameEn: 'Aldarb Alahmar',
    },
    {
        governorate: 1,
        cityNameAr: 'الزاوية الحمراء',
        cityNameEn: 'Zawya al-Hamra',
    },
    { governorate: 1, cityNameAr: 'الزيتون', cityNameEn: 'El-Zaytoun' },
    { governorate: 1, cityNameAr: 'الساحل', cityNameEn: 'Sahel' },
    { governorate: 1, cityNameAr: 'السلام', cityNameEn: 'El Salam' },
    { governorate: 1, cityNameAr: 'السيدة زينب', cityNameEn: 'Sayeda Zeinab' },
    { governorate: 1, cityNameAr: 'الشرابية', cityNameEn: 'El Sharabeya' },
    { governorate: 1, cityNameAr: 'مدينة الشروق', cityNameEn: 'Shorouk' },
    { governorate: 1, cityNameAr: 'الظاهر', cityNameEn: 'El Daher' },
    { governorate: 1, cityNameAr: 'العتبة', cityNameEn: 'Ataba' },
    { governorate: 1, cityNameAr: 'القاهرة الجديدة', cityNameEn: 'New Cairo' },
    { governorate: 1, cityNameAr: 'المرج', cityNameEn: 'El Marg' },
    { governorate: 1, cityNameAr: 'عزبة النخل', cityNameEn: 'Ezbet el Nakhl' },
    { governorate: 1, cityNameAr: 'المطرية', cityNameEn: 'Matareya' },
    { governorate: 1, cityNameAr: 'المعادى', cityNameEn: 'Maadi' },
    { governorate: 1, cityNameAr: 'المعصرة', cityNameEn: 'Maasara' },
    { governorate: 1, cityNameAr: 'المقطم', cityNameEn: 'Mokattam' },
    { governorate: 1, cityNameAr: 'المنيل', cityNameEn: 'Manyal' },
    { governorate: 1, cityNameAr: 'الموسكى', cityNameEn: 'Mosky' },
    { governorate: 1, cityNameAr: 'النزهة', cityNameEn: 'Nozha' },
    { governorate: 1, cityNameAr: 'الوايلى', cityNameEn: 'Waily' },
    { governorate: 1, cityNameAr: 'باب الشعرية', cityNameEn: 'Bab al-Shereia' },
    { governorate: 1, cityNameAr: 'بولاق', cityNameEn: 'Bolaq' },
    { governorate: 1, cityNameAr: 'جاردن سيتى', cityNameEn: 'Garden City' },
    {
        governorate: 1,
        cityNameAr: 'حدائق القبة',
        cityNameEn: 'Hadayek El-Kobba',
    },
    { governorate: 1, cityNameAr: 'حلوان', cityNameEn: 'Helwan' },
    { governorate: 1, cityNameAr: 'دار السلام', cityNameEn: 'Dar Al Salam' },
    { governorate: 1, cityNameAr: 'شبرا', cityNameEn: 'Shubra' },
    { governorate: 1, cityNameAr: 'طره', cityNameEn: 'Tura' },
    { governorate: 1, cityNameAr: 'عابدين', cityNameEn: 'Abdeen' },
    { governorate: 1, cityNameAr: 'عباسية', cityNameEn: 'Abaseya' },
    { governorate: 1, cityNameAr: 'عين شمس', cityNameEn: 'Ain Shams' },
    { governorate: 1, cityNameAr: 'مدينة نصر', cityNameEn: 'Nasr City' },
    { governorate: 1, cityNameAr: 'مصر الجديدة', cityNameEn: 'New Heliopolis' },
    { governorate: 1, cityNameAr: 'مصر القديمة', cityNameEn: 'Masr Al Qadima' },
    { governorate: 1, cityNameAr: 'منشية ناصر', cityNameEn: 'Mansheya Nasir' },
    { governorate: 1, cityNameAr: 'مدينة بدر', cityNameEn: 'Badr City' },
    { governorate: 1, cityNameAr: 'مدينة العبور', cityNameEn: 'Obour City' },
    { governorate: 1, cityNameAr: 'وسط البلد', cityNameEn: 'Cairo Downtown' },
    { governorate: 1, cityNameAr: 'الزمالك', cityNameEn: 'Zamalek' },
    { governorate: 1, cityNameAr: 'قصر النيل', cityNameEn: 'Kasr El Nile' },
    { governorate: 1, cityNameAr: 'الرحاب', cityNameEn: 'Rehab' },
    { governorate: 1, cityNameAr: 'القطامية', cityNameEn: 'Katameya' },
    { governorate: 1, cityNameAr: 'مدينتي', cityNameEn: 'Madinty' },
    { governorate: 1, cityNameAr: 'روض الفرج', cityNameEn: 'Rod Alfarag' },
    { governorate: 1, cityNameAr: 'شيراتون', cityNameEn: 'Sheraton' },
    { governorate: 1, cityNameAr: 'الجمالية', cityNameEn: 'El-Gamaleya' },
    {
        governorate: 1,
        cityNameAr: 'العاشر من رمضان',
        cityNameEn: '10th of Ramadan City',
    },
    { governorate: 1, cityNameAr: 'الحلمية', cityNameEn: 'Helmeyat Alzaytoun' },
    { governorate: 1, cityNameAr: 'النزهة الجديدة', cityNameEn: 'New Nozha' },
    {
        governorate: 1,
        cityNameAr: 'العاصمة الإدارية',
        cityNameEn: 'Capital New',
    },
    /* End Cairo ID:1 */

    /* Start Giza ID:2 */
    { governorate: 2, cityNameAr: 'الجيزة', cityNameEn: 'Giza' },
    {
        governorate: 2,
        cityNameAr: 'السادس من أكتوبر',
        cityNameEn: 'Sixth of October',
    },
    { governorate: 2, cityNameAr: 'الشيخ زايد', cityNameEn: 'Cheikh Zayed' },
    { governorate: 2, cityNameAr: 'الحوامدية', cityNameEn: 'Hawamdiyah' },
    { governorate: 2, cityNameAr: 'البدرشين', cityNameEn: 'Al Badrasheen' },
    { governorate: 2, cityNameAr: 'الصف', cityNameEn: 'Saf' },
    { governorate: 2, cityNameAr: 'أطفيح', cityNameEn: 'Atfih' },
    { governorate: 2, cityNameAr: 'العياط', cityNameEn: 'Al Ayat' },
    { governorate: 2, cityNameAr: 'الباويطي', cityNameEn: 'Al-Bawaiti' },
    {
        governorate: 2,
        cityNameAr: 'منشأة القناطر',
        cityNameEn: 'ManshiyetAl Qanater',
    },
    { governorate: 2, cityNameAr: 'أوسيم', cityNameEn: 'Oaseem' },
    { governorate: 2, cityNameAr: 'كرداسة', cityNameEn: 'Kerdasa' },
    { governorate: 2, cityNameAr: 'أبو النمرس', cityNameEn: 'Abu Nomros' },
    { governorate: 2, cityNameAr: 'كفر غطاطي', cityNameEn: 'Kafr Ghati' },
    {
        governorate: 2,
        cityNameAr: 'منشأة البكاري',
        cityNameEn: 'Manshiyet Al Bakari',
    },
    { governorate: 2, cityNameAr: 'الدقى', cityNameEn: 'Dokki' },
    { governorate: 2, cityNameAr: 'العجوزة', cityNameEn: 'Agouza' },
    { governorate: 2, cityNameAr: 'الهرم', cityNameEn: 'Haram' },
    { governorate: 2, cityNameAr: 'الوراق', cityNameEn: 'Warraq' },
    { governorate: 2, cityNameAr: 'امبابة', cityNameEn: 'Imbaba' },
    {
        governorate: 2,
        cityNameAr: 'بولاق الدكرور',
        cityNameEn: 'Boulaq Dakrour',
    },
    {
        governorate: 2,
        cityNameAr: 'الواحات البحرية',
        cityNameEn: 'Al Wahat Al Baharia',
    },
    { governorate: 2, cityNameAr: 'العمرانية', cityNameEn: 'Omraneya' },
    { governorate: 2, cityNameAr: 'المنيب', cityNameEn: 'Moneeb' },
    { governorate: 2, cityNameAr: 'بين السرايات', cityNameEn: 'Bin Alsarayat' },
    { governorate: 2, cityNameAr: 'الكيت كات', cityNameEn: 'Kit Kat' },
    { governorate: 2, cityNameAr: 'المهندسين', cityNameEn: 'Mohandessin' },
    { governorate: 2, cityNameAr: 'فيصل', cityNameEn: 'Faisal' },
    { governorate: 2, cityNameAr: 'أبو رواش', cityNameEn: 'Abu Rawash' },
    {
        governorate: 2,
        cityNameAr: 'حدائق الأهرام',
        cityNameEn: 'Hadayek Alahram',
    },
    { governorate: 2, cityNameAr: 'الحرانية', cityNameEn: 'Haraneya' },
    {
        governorate: 2,
        cityNameAr: 'حدائق اكتوبر',
        cityNameEn: 'Hadayek October',
    },
    { governorate: 2, cityNameAr: 'صفط اللبن', cityNameEn: 'Saft Allaban' },
    {
        governorate: 2,
        cityNameAr: 'القرية الذكية',
        cityNameEn: 'Smart Village',
    },
    { governorate: 2, cityNameAr: 'ارض اللواء', cityNameEn: 'Ard Ellwaa' },
    /* End Giza ID:2 */

    /* Start Alexandria ID:3 */
    { governorate: 3, cityNameAr: 'ابو قير', cityNameEn: 'Abu Qir' },
    { governorate: 3, cityNameAr: 'الابراهيمية', cityNameEn: 'Al Ibrahimeyah' },
    { governorate: 3, cityNameAr: 'الأزاريطة', cityNameEn: 'Azarita' },
    { governorate: 3, cityNameAr: 'الانفوشى', cityNameEn: 'Anfoushi' },
    { governorate: 3, cityNameAr: 'الدخيلة', cityNameEn: 'Dekheila' },
    { governorate: 3, cityNameAr: 'السيوف', cityNameEn: 'El Soyof' },
    { governorate: 3, cityNameAr: 'العامرية', cityNameEn: 'Ameria' },
    { governorate: 3, cityNameAr: 'اللبان', cityNameEn: 'El Labban' },
    { governorate: 3, cityNameAr: 'المفروزة', cityNameEn: 'Al Mafrouza' },
    { governorate: 3, cityNameAr: 'المنتزه', cityNameEn: 'El Montaza' },
    { governorate: 3, cityNameAr: 'المنشية', cityNameEn: 'Mansheya' },
    { governorate: 3, cityNameAr: 'الناصرية', cityNameEn: 'Naseria' },
    { governorate: 3, cityNameAr: 'امبروزو', cityNameEn: 'Ambrozo' },
    { governorate: 3, cityNameAr: 'باب شرق', cityNameEn: 'Bab Sharq' },
    { governorate: 3, cityNameAr: 'برج العرب', cityNameEn: 'Bourj Alarab' },
    { governorate: 3, cityNameAr: 'ستانلى', cityNameEn: 'Stanley' },
    { governorate: 3, cityNameAr: 'سموحة', cityNameEn: 'Smouha' },
    { governorate: 3, cityNameAr: 'سيدى بشر', cityNameEn: 'Sidi Bishr' },
    { governorate: 3, cityNameAr: 'شدس', cityNameEn: 'Shads' },
    { governorate: 3, cityNameAr: 'غيط العنب', cityNameEn: 'Gheet Alenab' },
    { governorate: 3, cityNameAr: 'فلمينج', cityNameEn: 'Fleming' },
    { governorate: 3, cityNameAr: 'فيكتوريا', cityNameEn: 'Victoria' },
    { governorate: 3, cityNameAr: 'كامب شيزار', cityNameEn: 'Camp Shizar' },
    { governorate: 3, cityNameAr: 'كرموز', cityNameEn: 'Karmooz' },
    { governorate: 3, cityNameAr: 'محطة الرمل', cityNameEn: 'Mahta Alraml' },
    { governorate: 3, cityNameAr: 'مينا البصل', cityNameEn: 'Mina El-Basal' },
    { governorate: 3, cityNameAr: 'العصافرة', cityNameEn: 'Asafra' },
    { governorate: 3, cityNameAr: 'العجمي', cityNameEn: 'Agamy' },
    { governorate: 3, cityNameAr: 'بكوس', cityNameEn: 'Bakos' },
    { governorate: 3, cityNameAr: 'بولكلي', cityNameEn: 'Boulkly' },
    { governorate: 3, cityNameAr: 'كليوباترا', cityNameEn: 'Cleopatra' },
    { governorate: 3, cityNameAr: 'جليم', cityNameEn: 'Glim' },
    { governorate: 3, cityNameAr: 'المعمورة', cityNameEn: 'Al Mamurah' },
    { governorate: 3, cityNameAr: 'المندرة', cityNameEn: 'Al Mandara' },
    { governorate: 3, cityNameAr: 'محرم بك', cityNameEn: 'Moharam Bek' },
    { governorate: 3, cityNameAr: 'الشاطبي', cityNameEn: 'Elshatby' },
    { governorate: 3, cityNameAr: 'سيدي جابر', cityNameEn: 'Sidi Gaber' },
    {
        governorate: 3,
        cityNameAr: 'الساحل الشمالي',
        cityNameEn: 'North Coast/sahel',
    },
    { governorate: 3, cityNameAr: 'الحضرة', cityNameEn: 'Alhadra' },
    { governorate: 3, cityNameAr: 'العطارين', cityNameEn: 'Alattarin' },
    { governorate: 3, cityNameAr: 'سيدي كرير', cityNameEn: 'Sidi Kerir' },
    { governorate: 3, cityNameAr: 'الجمرك', cityNameEn: 'Elgomrok' },
    { governorate: 3, cityNameAr: 'المكس', cityNameEn: 'Al Max' },
    { governorate: 3, cityNameAr: 'مارينا', cityNameEn: 'Marina' },
    /* End Alexandria ID:3 */

    /* Start Dakahlia ID:4 */
    { governorate: 4, cityNameAr: 'المنصورة', cityNameEn: 'Mansoura' },
    { governorate: 4, cityNameAr: 'طلخا', cityNameEn: 'Talkha' },
    { governorate: 4, cityNameAr: 'ميت غمر', cityNameEn: 'Mitt Ghamr' },
    { governorate: 4, cityNameAr: 'دكرنس', cityNameEn: 'Dekernes' },
    { governorate: 4, cityNameAr: 'أجا', cityNameEn: 'Aga' },
    { governorate: 4, cityNameAr: 'منية النصر', cityNameEn: 'Menia El Nasr' },
    { governorate: 4, cityNameAr: 'السنبلاوين', cityNameEn: 'Sinbillawin' },
    { governorate: 4, cityNameAr: 'الكردي', cityNameEn: 'El Kurdi' },
    { governorate: 4, cityNameAr: 'بني عبيد', cityNameEn: 'Bani Ubaid' },
    { governorate: 4, cityNameAr: 'المنزلة', cityNameEn: 'Al Manzala' },
    { governorate: 4, cityNameAr: 'تمي الأمديد', cityNameEn: "tami al'amdid" },
    { governorate: 4, cityNameAr: 'الجمالية', cityNameEn: 'aljamalia' },
    { governorate: 4, cityNameAr: 'شربين', cityNameEn: 'Sherbin' },
    { governorate: 4, cityNameAr: 'المطرية', cityNameEn: 'Mataria' },
    { governorate: 4, cityNameAr: 'بلقاس', cityNameEn: 'Belqas' },
    { governorate: 4, cityNameAr: 'ميت سلسيل', cityNameEn: 'Meet Salsil' },
    { governorate: 4, cityNameAr: 'جمصة', cityNameEn: 'Gamasa' },
    { governorate: 4, cityNameAr: 'محلة دمنة', cityNameEn: 'Mahalat Damana' },
    { governorate: 4, cityNameAr: 'نبروه', cityNameEn: 'Nabroh' },
    /* End Dakahlia ID:4 */

    /* Start Red Sea ID:5 */
    { governorate: 5, cityNameAr: 'الغردقة', cityNameEn: 'Hurghada' },
    { governorate: 5, cityNameAr: 'رأس غارب', cityNameEn: 'Ras Ghareb' },
    { governorate: 5, cityNameAr: 'سفاجا', cityNameEn: 'Safaga' },
    { governorate: 5, cityNameAr: 'القصير', cityNameEn: 'El Qusiar' },
    { governorate: 5, cityNameAr: 'مرسى علم', cityNameEn: 'Marsa Alam' },
    { governorate: 5, cityNameAr: 'الشلاتين', cityNameEn: 'Shalatin' },
    { governorate: 5, cityNameAr: 'حلايب', cityNameEn: 'Halaib' },
    { governorate: 5, cityNameAr: 'الدهار', cityNameEn: 'Aldahar' },
    /* End Red Sea ID:5 */

    /* Start Beheira ID:6 */
    { governorate: 6, cityNameAr: 'دمنهور', cityNameEn: 'Damanhour' },
    { governorate: 6, cityNameAr: 'كفر الدوار', cityNameEn: 'Kafr El Dawar' },
    { governorate: 6, cityNameAr: 'رشيد', cityNameEn: 'Rashid' },
    { governorate: 6, cityNameAr: 'إدكو', cityNameEn: 'Edco' },
    {
        governorate: 6,
        cityNameAr: 'أبو المطامير',
        cityNameEn: 'Abu al-Matamir',
    },
    { governorate: 6, cityNameAr: 'أبو حمص', cityNameEn: 'Abu Homs' },
    { governorate: 6, cityNameAr: 'الدلنجات', cityNameEn: 'Delengat' },
    { governorate: 6, cityNameAr: 'المحمودية', cityNameEn: 'Mahmoudiyah' },
    { governorate: 6, cityNameAr: 'الرحمانية', cityNameEn: 'Rahmaniyah' },
    { governorate: 6, cityNameAr: 'إيتاي البارود', cityNameEn: 'Itai Baroud' },
    { governorate: 6, cityNameAr: 'حوش عيسى', cityNameEn: 'Housh Eissa' },
    { governorate: 6, cityNameAr: 'شبراخيت', cityNameEn: 'Shubrakhit' },
    { governorate: 6, cityNameAr: 'كوم حمادة', cityNameEn: 'Kom Hamada' },
    { governorate: 6, cityNameAr: 'بدر', cityNameEn: 'Badr' },
    { governorate: 6, cityNameAr: 'وادي النطرون', cityNameEn: 'Wadi Natrun' },
    {
        governorate: 6,
        cityNameAr: 'النوبارية الجديدة',
        cityNameEn: 'New Nubaria',
    },
    { governorate: 6, cityNameAr: 'النوبارية', cityNameEn: 'Alnoubareya' },
    /* End Beheira ID:6 */

    /* Start Fayoum ID:7 */
    { governorate: 7, cityNameAr: 'الفيوم', cityNameEn: 'Fayoum' },
    {
        governorate: 7,
        cityNameAr: 'الفيوم الجديدة',
        cityNameEn: 'Fayoum El Gedida',
    },
    { governorate: 7, cityNameAr: 'طامية', cityNameEn: 'Tamiya' },
    { governorate: 7, cityNameAr: 'سنورس', cityNameEn: 'Snores' },
    { governorate: 7, cityNameAr: 'إطسا', cityNameEn: 'Etsa' },
    { governorate: 7, cityNameAr: 'إبشواي', cityNameEn: 'Epschway' },
    {
        governorate: 7,
        cityNameAr: 'يوسف الصديق',
        cityNameEn: 'Yusuf El Sediaq',
    },
    { governorate: 7, cityNameAr: 'الحادقة', cityNameEn: 'Hadqa' },
    { governorate: 7, cityNameAr: 'اطسا', cityNameEn: 'Atsa' },
    { governorate: 7, cityNameAr: 'الجامعة', cityNameEn: 'Algamaa' },
    { governorate: 7, cityNameAr: 'السيالة', cityNameEn: 'Sayala' },
    /* End Fayoum ID:7 */

    /* Start Gharbia ID:8 */
    { governorate: 8, cityNameAr: 'طنطا', cityNameEn: 'Tanta' },
    {
        governorate: 8,
        cityNameAr: 'المحلة الكبرى',
        cityNameEn: 'Al Mahalla Al Kobra',
    },
    { governorate: 8, cityNameAr: 'كفر الزيات', cityNameEn: 'Kafr El Zayat' },
    { governorate: 8, cityNameAr: 'زفتى', cityNameEn: 'Zefta' },
    { governorate: 8, cityNameAr: 'السنطة', cityNameEn: 'El Santa' },
    { governorate: 8, cityNameAr: 'قطور', cityNameEn: 'Qutour' },
    { governorate: 8, cityNameAr: 'بسيون', cityNameEn: 'Basion' },
    { governorate: 8, cityNameAr: 'سمنود', cityNameEn: 'Samannoud' },
    /* End Gharbia ID:8 */

    /* Start Ismailia ID:9 */
    { governorate: 9, cityNameAr: 'الإسماعيلية', cityNameEn: 'Ismailia' },
    { governorate: 9, cityNameAr: 'فايد', cityNameEn: 'Fayed' },
    { governorate: 9, cityNameAr: 'القنطرة شرق', cityNameEn: 'Qantara Sharq' },
    { governorate: 9, cityNameAr: 'القنطرة غرب', cityNameEn: 'Qantara Gharb' },
    {
        governorate: 9,
        cityNameAr: 'التل الكبير',
        cityNameEn: 'El Tal El Kabier',
    },
    { governorate: 9, cityNameAr: 'أبو صوير', cityNameEn: 'Abu Sawir' },
    {
        governorate: 9,
        cityNameAr: 'القصاصين الجديدة',
        cityNameEn: 'Kasasien El Gedida',
    },
    { governorate: 9, cityNameAr: 'نفيشة', cityNameEn: 'Nefesha' },
    { governorate: 9, cityNameAr: 'الشيخ زايد', cityNameEn: 'Sheikh Zayed' },
    /* End Ismailia ID:9 */

    /* Start Monufya ID:10 */
    { governorate: 10, cityNameAr: 'شبين الكوم', cityNameEn: 'Shbeen El Koom' },
    { governorate: 10, cityNameAr: 'مدينة السادات', cityNameEn: 'Sadat City' },
    { governorate: 10, cityNameAr: 'منوف', cityNameEn: 'Menouf' },
    { governorate: 10, cityNameAr: 'سرس الليان', cityNameEn: 'Sars El-Layan' },
    { governorate: 10, cityNameAr: 'أشمون', cityNameEn: 'Ashmon' },
    { governorate: 10, cityNameAr: 'الباجور', cityNameEn: 'Al Bagor' },
    { governorate: 10, cityNameAr: 'قويسنا', cityNameEn: 'Quesna' },
    { governorate: 10, cityNameAr: 'بركة السبع', cityNameEn: 'Berkat El Saba' },
    { governorate: 10, cityNameAr: 'تلا', cityNameEn: 'Tala' },
    { governorate: 10, cityNameAr: 'الشهداء', cityNameEn: 'Al Shohada' },
    /* Start Monufya ID:10 */

    /* Start Minya ID:11 */
    { governorate: 11, cityNameAr: 'المنيا', cityNameEn: 'Minya' },
    {
        governorate: 11,
        cityNameAr: 'المنيا الجديدة',
        cityNameEn: 'Minya El Gedida',
    },
    { governorate: 11, cityNameAr: 'العدوة', cityNameEn: 'El Adwa' },
    { governorate: 11, cityNameAr: 'مغاغة', cityNameEn: 'Magagha' },
    { governorate: 11, cityNameAr: 'بني مزار', cityNameEn: 'Bani Mazar' },
    { governorate: 11, cityNameAr: 'مطاي', cityNameEn: 'Mattay' },
    { governorate: 11, cityNameAr: 'سمالوط', cityNameEn: 'Samalut' },
    {
        governorate: 11,
        cityNameAr: 'المدينة الفكرية',
        cityNameEn: 'Madinat El Fekria',
    },
    { governorate: 11, cityNameAr: 'ملوي', cityNameEn: 'Meloy' },
    { governorate: 11, cityNameAr: 'دير مواس', cityNameEn: 'Deir Mawas' },
    { governorate: 11, cityNameAr: 'ابو قرقاص', cityNameEn: 'Abu Qurqas' },
    { governorate: 11, cityNameAr: 'ارض سلطان', cityNameEn: 'Ard Sultan' },
    /* End Minya ID:11 */

    /* Start Qalubia ID:12 */
    { governorate: 12, cityNameAr: 'بنها', cityNameEn: 'Banha' },
    { governorate: 12, cityNameAr: 'قليوب', cityNameEn: 'Qalyub' },
    {
        governorate: 12,
        cityNameAr: 'شبرا الخيمة',
        cityNameEn: 'Shubra Al Khaimah',
    },
    {
        governorate: 12,
        cityNameAr: 'القناطر الخيرية',
        cityNameEn: 'Al Qanater Charity',
    },
    { governorate: 12, cityNameAr: 'الخانكة', cityNameEn: 'Khanka' },
    { governorate: 12, cityNameAr: 'كفر شكر', cityNameEn: 'Kafr Shukr' },
    { governorate: 12, cityNameAr: 'طوخ', cityNameEn: 'Tukh' },
    { governorate: 12, cityNameAr: 'قها', cityNameEn: 'Qaha' },
    { governorate: 12, cityNameAr: 'العبور', cityNameEn: 'Obour' },
    { governorate: 12, cityNameAr: 'الخصوص', cityNameEn: 'Khosous' },
    {
        governorate: 12,
        cityNameAr: 'شبين القناطر',
        cityNameEn: 'Shibin Al Qanater',
    },
    { governorate: 12, cityNameAr: 'مسطرد', cityNameEn: 'Mostorod' },
    /* End Qalubia ID:12 */

    /* Start New Valley ID:13 */
    { governorate: 13, cityNameAr: 'الخارجة', cityNameEn: 'El Kharga' },
    { governorate: 13, cityNameAr: 'باريس', cityNameEn: 'Paris' },
    { governorate: 13, cityNameAr: 'موط', cityNameEn: 'Mout' },
    { governorate: 13, cityNameAr: 'الفرافرة', cityNameEn: 'Farafra' },
    { governorate: 13, cityNameAr: 'بلاط', cityNameEn: 'Balat' },
    { governorate: 13, cityNameAr: 'الداخلة', cityNameEn: 'Dakhla' },
    /* End New Valley ID:13 */

    /* Start South Sinai ID:14 */
    { governorate: 14, cityNameAr: 'السويس', cityNameEn: 'Suez' },
    { governorate: 14, cityNameAr: 'الجناين', cityNameEn: 'Alganayen' },
    { governorate: 14, cityNameAr: 'عتاقة', cityNameEn: 'Ataqah' },
    { governorate: 14, cityNameAr: 'العين السخنة', cityNameEn: 'Ain Sokhna' },
    { governorate: 14, cityNameAr: 'فيصل', cityNameEn: 'Faysal' },
    /* End South Sinai ID:14 */

    /* Start Aswan ID:15 */
    { governorate: 15, cityNameAr: 'أسوان', cityNameEn: 'Aswan' },
    {
        governorate: 15,
        cityNameAr: 'أسوان الجديدة',
        cityNameEn: 'Aswan El Gedida',
    },
    { governorate: 15, cityNameAr: 'دراو', cityNameEn: 'Drau' },
    { governorate: 15, cityNameAr: 'كوم أمبو', cityNameEn: 'Kom Ombo' },
    { governorate: 15, cityNameAr: 'نصر النوبة', cityNameEn: 'Nasr Al Nuba' },
    { governorate: 15, cityNameAr: 'كلابشة', cityNameEn: 'Kalabsha' },
    { governorate: 15, cityNameAr: 'إدفو', cityNameEn: 'Edfu' },
    { governorate: 15, cityNameAr: 'الرديسية', cityNameEn: 'Al-Radisiyah' },
    { governorate: 15, cityNameAr: 'البصيلية', cityNameEn: 'Al Basilia' },
    { governorate: 15, cityNameAr: 'السباعية', cityNameEn: 'Al Sibaeia' },
    {
        governorate: 15,
        cityNameAr: 'ابوسمبل السياحية',
        cityNameEn: 'Abo Simbl Al Siyahia',
    },
    { governorate: 15, cityNameAr: 'مرسى علم', cityNameEn: 'Marsa Alam' },
    /* End Aswan ID:15 */

    /* Start Assiut ID:16 */
    { governorate: 16, cityNameAr: 'أسيوط', cityNameEn: 'Assiut' },
    {
        governorate: 16,
        cityNameAr: 'أسيوط الجديدة',
        cityNameEn: 'Assiut El Gedida',
    },
    { governorate: 16, cityNameAr: 'ديروط', cityNameEn: 'Dayrout' },
    { governorate: 16, cityNameAr: 'منفلوط', cityNameEn: 'Manfalut' },
    { governorate: 16, cityNameAr: 'القوصية', cityNameEn: 'Qusiya' },
    { governorate: 16, cityNameAr: 'أبنوب', cityNameEn: 'Abnoub' },
    { governorate: 16, cityNameAr: 'أبو تيج', cityNameEn: 'Abu Tig' },
    { governorate: 16, cityNameAr: 'الغنايم', cityNameEn: 'El Ghanaim' },
    { governorate: 16, cityNameAr: 'ساحل سليم', cityNameEn: 'Sahel Selim' },
    { governorate: 16, cityNameAr: 'البداري', cityNameEn: 'El Badari' },
    { governorate: 16, cityNameAr: 'صدفا', cityNameEn: 'Sidfa' },
    /* End Assiut ID:16 */

    /* Start Bani Sweif ID:17 */
    { governorate: 17, cityNameAr: 'بني سويف', cityNameEn: 'Bani Sweif' },
    {
        governorate: 17,
        cityNameAr: 'بني سويف الجديدة',
        cityNameEn: 'Beni Suef El Gedida',
    },
    { governorate: 17, cityNameAr: 'الواسطى', cityNameEn: 'Al Wasta' },
    { governorate: 17, cityNameAr: 'ناصر', cityNameEn: 'Naser' },
    { governorate: 17, cityNameAr: 'إهناسيا', cityNameEn: 'Ehnasia' },
    { governorate: 17, cityNameAr: 'ببا', cityNameEn: 'beba' },
    { governorate: 17, cityNameAr: 'الفشن', cityNameEn: 'Fashn' },
    { governorate: 17, cityNameAr: 'سمسطا', cityNameEn: 'Somasta' },
    { governorate: 17, cityNameAr: 'الاباصيرى', cityNameEn: 'Alabbaseri' },
    { governorate: 17, cityNameAr: 'مقبل', cityNameEn: 'Mokbel' },
    /* End Bani Sweif ID:17 */

    /* Start PorSaid ID:18 */
    { governorate: 18, cityNameAr: 'بورسعيد', cityNameEn: 'PorSaid' },
    { governorate: 18, cityNameAr: 'بورفؤاد', cityNameEn: 'Port Fouad' },
    { governorate: 18, cityNameAr: 'العرب', cityNameEn: 'Alarab' },
    { governorate: 18, cityNameAr: 'حى الزهور', cityNameEn: 'Zohour' },
    { governorate: 18, cityNameAr: 'حى الشرق', cityNameEn: 'Alsharq' },
    { governorate: 18, cityNameAr: 'حى الضواحى', cityNameEn: 'Aldawahi' },
    { governorate: 18, cityNameAr: 'حى المناخ', cityNameEn: 'Almanakh' },
    { governorate: 18, cityNameAr: 'حى مبارك', cityNameEn: 'Mubarak' },
    /* End PorSaid ID:18 */

    /* Start Damietta ID:19 */
    { governorate: 19, cityNameAr: 'دمياط', cityNameEn: 'Damietta' },
    {
        governorate: 19,
        cityNameAr: 'دمياط الجديدة',
        cityNameEn: 'New Damietta',
    },
    { governorate: 19, cityNameAr: 'رأس البر', cityNameEn: 'Ras El Bar' },
    { governorate: 19, cityNameAr: 'فارسكور', cityNameEn: 'Faraskour' },
    { governorate: 19, cityNameAr: 'الزرقا', cityNameEn: 'Zarqa' },
    { governorate: 19, cityNameAr: 'السرو', cityNameEn: 'alsaru' },
    { governorate: 19, cityNameAr: 'الروضة', cityNameEn: 'alruwda' },
    { governorate: 19, cityNameAr: 'كفر البطيخ', cityNameEn: 'Kafr El-Batikh' },
    { governorate: 19, cityNameAr: 'عزبة البرج', cityNameEn: 'Azbet Al Burg' },
    {
        governorate: 19,
        cityNameAr: 'ميت أبو غالب',
        cityNameEn: 'Meet Abou Ghalib',
    },
    { governorate: 19, cityNameAr: 'كفر سعد', cityNameEn: 'Kafr Saad' },
    /* End Damietta ID:19 */

    /* Start Sharqia ID:20 */
    { governorate: 20, cityNameAr: 'الزقازيق', cityNameEn: 'Zagazig' },
    {
        governorate: 20,
        cityNameAr: 'العاشر من رمضان',
        cityNameEn: 'Al Ashr Men Ramadan',
    },
    { governorate: 20, cityNameAr: 'منيا القمح', cityNameEn: 'Minya Al Qamh' },
    { governorate: 20, cityNameAr: 'بلبيس', cityNameEn: 'Belbeis' },
    {
        governorate: 20,
        cityNameAr: 'مشتول السوق',
        cityNameEn: 'Mashtoul El Souq',
    },
    { governorate: 20, cityNameAr: 'القنايات', cityNameEn: 'Qenaiat' },
    { governorate: 20, cityNameAr: 'أبو حماد', cityNameEn: 'Abu Hammad' },
    { governorate: 20, cityNameAr: 'القرين', cityNameEn: 'El Qurain' },
    { governorate: 20, cityNameAr: 'ههيا', cityNameEn: 'Hehia' },
    { governorate: 20, cityNameAr: 'أبو كبير', cityNameEn: 'Abu Kabir' },
    { governorate: 20, cityNameAr: 'فاقوس', cityNameEn: 'Faccus' },
    {
        governorate: 20,
        cityNameAr: 'الصالحية الجديدة',
        cityNameEn: 'El Salihia El Gedida',
    },
    {
        governorate: 20,
        cityNameAr: 'الإبراهيمية',
        cityNameEn: 'Al Ibrahimiyah',
    },
    { governorate: 20, cityNameAr: 'ديرب نجم', cityNameEn: 'Deirb Negm' },
    { governorate: 20, cityNameAr: 'كفر صقر', cityNameEn: 'Kafr Saqr' },
    { governorate: 20, cityNameAr: 'أولاد صقر', cityNameEn: 'Awlad Saqr' },
    { governorate: 20, cityNameAr: 'الحسينية', cityNameEn: 'Husseiniya' },
    {
        governorate: 20,
        cityNameAr: 'صان الحجر القبلية',
        cityNameEn: 'san alhajar alqablia',
    },
    {
        governorate: 20,
        cityNameAr: 'منشأة أبو عمر',
        cityNameEn: 'Manshayat Abu Omar',
    },
    /* End Sharqia ID:20 */

    /* Start South Sinai ID:21 */
    { governorate: 21, cityNameAr: 'الطور', cityNameEn: 'Al Toor' },
    { governorate: 21, cityNameAr: 'شرم الشيخ', cityNameEn: 'Sharm El-Shaikh' },
    { governorate: 21, cityNameAr: 'دهب', cityNameEn: 'Dahab' },
    { governorate: 21, cityNameAr: 'نويبع', cityNameEn: 'Nuweiba' },
    { governorate: 21, cityNameAr: 'طابا', cityNameEn: 'Taba' },
    {
        governorate: 21,
        cityNameAr: 'سانت كاترين',
        cityNameEn: 'Saint Catherine',
    },
    { governorate: 21, cityNameAr: 'أبو رديس', cityNameEn: 'Abu Redis' },
    { governorate: 21, cityNameAr: 'أبو زنيمة', cityNameEn: 'Abu Zenaima' },
    { governorate: 21, cityNameAr: 'رأس سدر', cityNameEn: 'Ras Sidr' },
    /* End South Sinai ID:21 */

    /* Start Kafr El Sheikh ID:22 */
    { governorate: 22, cityNameAr: 'كفر الشيخ', cityNameEn: 'Kafr El Sheikh' },
    {
        governorate: 22,
        cityNameAr: 'وسط البلد كفر الشيخ',
        cityNameEn: 'Kafr El Sheikh Downtown',
    },
    { governorate: 22, cityNameAr: 'دسوق', cityNameEn: 'Desouq' },
    { governorate: 22, cityNameAr: 'فوه', cityNameEn: 'Fooh' },
    { governorate: 22, cityNameAr: 'مطوبس', cityNameEn: 'Metobas' },
    {
        governorate: 22,
        cityNameAr: 'برج البرلس',
        cityNameEn: 'Burg Al Burullus',
    },
    { governorate: 22, cityNameAr: 'بلطيم', cityNameEn: 'Baltim' },
    { governorate: 22, cityNameAr: 'مصيف بلطيم', cityNameEn: 'Masief Baltim' },
    { governorate: 22, cityNameAr: 'الحامول', cityNameEn: 'Hamol' },
    { governorate: 22, cityNameAr: 'بيلا', cityNameEn: 'Bella' },
    { governorate: 22, cityNameAr: 'الرياض', cityNameEn: 'Riyadh' },
    { governorate: 22, cityNameAr: 'سيدي سالم', cityNameEn: 'Sidi Salm' },
    { governorate: 22, cityNameAr: 'قلين', cityNameEn: 'Qellen' },
    { governorate: 22, cityNameAr: 'سيدي غازي', cityNameEn: 'Sidi Ghazi' },
    /* End Kafr El Sheikh ID:22 */

    /* Start Matrouh ID:23 */
    { governorate: 23, cityNameAr: 'مرسى مطروح', cityNameEn: 'Marsa Matrouh' },
    { governorate: 23, cityNameAr: 'الحمام', cityNameEn: 'El Hamam' },
    { governorate: 23, cityNameAr: 'العلمين', cityNameEn: 'Alamein' },
    { governorate: 23, cityNameAr: 'الضبعة', cityNameEn: 'Dabaa' },
    { governorate: 23, cityNameAr: 'النجيلة', cityNameEn: 'Al-Nagila' },
    { governorate: 23, cityNameAr: 'سيدي براني', cityNameEn: 'Sidi Brani' },
    { governorate: 23, cityNameAr: 'السلوم', cityNameEn: 'Salloum' },
    { governorate: 23, cityNameAr: 'سيوة', cityNameEn: 'Siwa' },
    { governorate: 23, cityNameAr: 'مارينا', cityNameEn: 'Marina' },
    {
        governorate: 23,
        cityNameAr: 'الساحل الشمالى',
        cityNameEn: 'North Coast',
    },
    /* End Matrouh ID:23 */

    /* Start Luxor ID:24 */
    { governorate: 24, cityNameAr: 'الأقصر', cityNameEn: 'Luxor' },
    { governorate: 24, cityNameAr: 'الأقصر الجديدة', cityNameEn: 'New Luxor' },
    { governorate: 24, cityNameAr: 'إسنا', cityNameEn: 'Esna' },
    { governorate: 24, cityNameAr: 'طيبة الجديدة', cityNameEn: 'New Tiba' },
    { governorate: 24, cityNameAr: 'الزينية', cityNameEn: 'Al ziynia' },
    { governorate: 24, cityNameAr: 'البياضية', cityNameEn: 'Al Bayadieh' },
    { governorate: 24, cityNameAr: 'القرنة', cityNameEn: 'Al Qarna' },
    { governorate: 24, cityNameAr: 'أرمنت', cityNameEn: 'Armant' },
    { governorate: 24, cityNameAr: 'الطود', cityNameEn: 'Al Tud' },
    /* End Luxor ID:24 */

    /* Start Qena ID:25 */
    { governorate: 25, cityNameAr: 'قنا', cityNameEn: 'Qena' },
    { governorate: 25, cityNameAr: 'قنا الجديدة', cityNameEn: 'New Qena' },
    { governorate: 25, cityNameAr: 'ابو طشت', cityNameEn: 'Abu Tesht' },
    { governorate: 25, cityNameAr: 'نجع حمادي', cityNameEn: 'Nag Hammadi' },
    { governorate: 25, cityNameAr: 'دشنا', cityNameEn: 'Deshna' },
    { governorate: 25, cityNameAr: 'الوقف', cityNameEn: 'Alwaqf' },
    { governorate: 25, cityNameAr: 'قفط', cityNameEn: 'Qaft' },
    { governorate: 25, cityNameAr: 'نقادة', cityNameEn: 'Naqada' },
    { governorate: 25, cityNameAr: 'فرشوط', cityNameEn: 'Farshout' },
    { governorate: 25, cityNameAr: 'قوص', cityNameEn: 'Quos' },
    /* End Qena ID:25 */

    /* Start North Sinai ID:26 */
    { governorate: 26, cityNameAr: 'العريش', cityNameEn: 'Arish' },
    { governorate: 26, cityNameAr: 'الشيخ زويد', cityNameEn: 'Sheikh Zowaid' },
    { governorate: 26, cityNameAr: 'نخل', cityNameEn: 'Nakhl' },
    { governorate: 26, cityNameAr: 'رفح', cityNameEn: 'Rafah' },
    { governorate: 26, cityNameAr: 'بئر العبد', cityNameEn: 'Bir al-Abed' },
    { governorate: 26, cityNameAr: 'الحسنة', cityNameEn: 'Al Hasana' },
    /* End North Sinai ID:26 */

    /* Start Sohag ID:27 */
    { governorate: 27, cityNameAr: 'سوهاج', cityNameEn: 'Sohag' },
    {
        governorate: 27,
        cityNameAr: 'سوهاج الجديدة',
        cityNameEn: 'Sohag El Gedida',
    },
    { governorate: 27, cityNameAr: 'أخميم', cityNameEn: 'Akhmeem' },
    {
        governorate: 27,
        cityNameAr: 'أخميم الجديدة',
        cityNameEn: 'Akhmim El Gedida',
    },
    { governorate: 27, cityNameAr: 'البلينا', cityNameEn: 'Albalina' },
    { governorate: 27, cityNameAr: 'المراغة', cityNameEn: 'El Maragha' },
    { governorate: 27, cityNameAr: 'المنشأة', cityNameEn: "almunsha'a" },
    { governorate: 27, cityNameAr: 'دار السلام', cityNameEn: 'Dar AISalaam' },
    { governorate: 27, cityNameAr: 'جرجا', cityNameEn: 'Gerga' },
    {
        governorate: 27,
        cityNameAr: 'جهينة الغربية',
        cityNameEn: 'Jahina Al Gharbia',
    },
    { governorate: 27, cityNameAr: 'ساقلته', cityNameEn: 'Saqilatuh' },
    { governorate: 27, cityNameAr: 'طما', cityNameEn: 'Tama' },
    { governorate: 27, cityNameAr: 'طهطا', cityNameEn: 'Tahta' },
    { governorate: 27, cityNameAr: 'الكوثر', cityNameEn: 'Alkawthar' },
    /* End Sharqia ID:27 */
];

const city = () => {
    let done = 0;

    database.connect();

    for (let i = 0; i < cities.length; i++) {
        City.create(cities[i]).then(() => {
            done++;
            if (done === cities.length) {
                exit();
            }
        });
    }

    const exit = () =>
        database.disconnect().then(() => {
            console.log('Database disconnect');
        });
};

city();
